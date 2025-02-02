import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass, currentUser, DialogEvent, HashMap, Identity, notifyError, SettingsService } from '@user-interfaces/common'
import { Building, OrganisationService } from '@user-interfaces/organisation';
import { CalendarService } from '../../../../calendar/src/lib/calendar.service';
import { filterSpacesRules } from '../../../../bookings/src/lib/booking.utilities';
import { Space } from '../space.class';

import * as dayjs from 'dayjs';

export interface SpaceSelectModalData {
    /** List of currently selected spaces */
    readonly spaces: Space[];
    /** Selected date to check space availability */
    readonly date: number;
    /** Duration of the availability that is desired */
    readonly duration: number;
    all_day?: boolean;
    visitor_type?: string;
}

@Component({
    selector: 'a-space-select-modal',
    templateUrl: './space-select-modal.component.html',
    styleUrls: ['./space-select-modal.component.scss'],
})
export class SpaceSelectModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of selected spaces */
    public spaces: Space[] = [];
    /** List of available spaces */
    public available_spaces: Space[] = [];
    /** List of filtered spaces */
    public filtered_spaces: Space[] = [];
    /** Building to filter available spaces */
    public building: Building;
    /** Whether to show selected spaces */
    public show_selected: boolean;
    /** List of available space types */
    public space_types: Identity[] = [];
    /** ID of the space type to filter available spaces on */
    public type: string;
    /** Whether the available spaces are being loaded */
    public loading: boolean;

    public get buildings(): Building[] {
        return this._org.buildings;
    }

    /** Whether multiple spaces can be selected */
    public get multiple(): boolean {
        return !!this._settings.get('app.booking.multiple_spaces');
    }

    /** Mapping of spaces to whether they are selected */
    public get space_map(): HashMap<boolean> {
        const spaces = {};
        this.spaces.forEach((space) => (spaces[space.id] = true));
        return spaces;
    }

    constructor(
        private _org: OrganisationService,
        private _calendar: CalendarService,
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) private _data: SpaceSelectModalData
    ) {
        super();
    }

    public ngOnInit(): void {
        this.building = this._org.building || this.buildings[0];
        this.spaces = this._data.spaces && this._data.spaces.length ? [...this._data.spaces] : [];
        this.loadAvailableSpaces();
    }

    public async loadAvailableSpaces() {
        this.loading = true;
        const date = dayjs(this._data.date);
        this.available_spaces = await this._calendar
            .freeBusy({
                zone_ids: this.building.id,
                period_start: date.unix(),
                period_end: date.add(this._data.duration, 'm').unix(),
            })
            .toPromise()
            .catch((err) => {
                notifyError(`Error finding available spaces: ${err.message || err}`);
                return [];
            });
        this.filtered_spaces = this.filterSpaces(this.available_spaces);
        this.loading = false;
    }

    /** Check booking rules and filter spaces */
    public filterSpaces(list: Space[]): Space[] {
        const settings = this._org.building_settings;
        const res = filterSpacesRules(list, settings, currentUser(), { ...this._data });
        return res;
    }

    public spaceSelected(space: Space) {
        if (this.multiple) {
            if (!this.space_map[space.id]) {
                this.spaces.push(space);
            }
        } else {
            this.spaces = [space];
            this.save();
        }
    }

    public save() {
        this.event.emit({ reason: 'done', metadata: this.spaces });
    }
}
