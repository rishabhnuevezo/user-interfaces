import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import {
    ApplicationIcon,
    BaseClass,
    SettingsService,
} from '@user-interfaces/common';
import { SpacesService } from '@user-interfaces/spaces';

import { DashboardStateService } from '../../dashboard/dashboard-state.service';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'a-topbar-header',
    templateUrl: './topbar-header.component.html',
    styleUrls: ['./topbar-header.component.scss'],
})
export class TopbarHeaderComponent extends BaseClass {
    /** Whether to show menu */
    @Input() public menu: boolean;
    /** Emiiter for changes to menu state */
    @Output() public menuChange = new EventEmitter<boolean>();

    public readonly updateSearch = (s) =>
        this._dashboard.setOptions({ search: s });

    public setSelected = (opt) => this._settings.post('last_search', opt);

    public readonly search_results = combineLatest([
        this._dashboard.options,
        this._dashboard.contacts,
        this._dashboard.search_results,
        this._spaces.list,
    ]).pipe(
        map(([{ search }, contacts, users, spaces]) => {
            search = (search || '').toLowerCase()
            const list = [...contacts, ...users, ...spaces];
            const new_list = list.filter(
                (i) =>
                    i.name?.toLowerCase().includes(search) ||
                    i.email?.toLowerCase().includes(search)
            );
            new_list.sort((a, b) => a.name?.localeCompare(b.name));
            return new_list;
        })
    );

    @Input() public showTitle = true;
    @Input() public showHome = true;
    @Input() public noBackgroundColor = false;

    /** Whether to show searchbar */
    @Input() public search = true;

    public search_str = '';

    /** Logo of the application organisation */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light') || { type: 'icon' } as any;
    }

    /** Whether to reverse the side of the menu icon */
    public get reverse() {
        return this._settings.get('app.general.menu.position') === 'left';
    }

    /** Current page title */
    public get title() {
        return this._settings.get('navTitle');
    }

    constructor(
        private router: Router,
        private _settings: SettingsService,
        private _dashboard: DashboardStateService,
        private _spaces: SpacesService
    ) {
        super();
    }

    /** Toggle Menu */
    public showMenu() {
        this.menu = true;
        this.menuChange.emit(this.menu);
    }

    public home() {
        this.router.navigate(['home']);
    }
}
