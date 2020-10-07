import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { Building } from 'src/app/organisation/building.class';
import { BuildingLevel } from 'src/app/organisation/level.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'a-map-controls',
    templateUrl: './map-controls.component.html',
    styleUrls: ['./map-controls.component.scss'],
})
export class MapControlsComponent extends BaseClass implements OnInit {
    /** ID of the active building */
    @Input() public building: string;
    /** ID of the active level */
    @Input() public level: string;
    /** Emitter for changes to the active level */
    @Output() public levelChange = new EventEmitter<string>();
    /** List of available buildings */
    public building_list: Building[] = [];
    /** List of available levels */
    public level_list: BuildingLevel[] = [];

    public get can_select_building(): boolean {
        return !!this._settings.get('app.explore.can_select_building');
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this._org.initialised.pipe(first((_) => _)).subscribe(() => {
            this.init();
        });
    }

    public init() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('level')) {
                    const level_id = params.get('level');
                    const level = this._org.levelWithID([level_id]);
                    if (level) {
                        this.level = level.id;
                        this.setBuilding(level.parent_id);
                        this.levelChange.emit(this.level);
                        this.clearTimeout('check_building');
                    }
                }
            })
        );
        this.building_list = this._org.buildings;
        this.timeout('check_building', () => {
            if (!this.building) {
                this.setBuilding(this._org.building.id);
            }
            this.levelChange.emit(this.level);
        });
    }

    public setBuilding(bld_id: string) {
        const building = this._org.buildings.find((bld) => bld.id === bld_id);
        if (building) {
            this.building = bld_id;
            this.level_list = this._org.levelsForBuilding(building);
            if (this.level_list.length && !this.level_list.find((lvl) => lvl.id === this.level)) {
                this.updateLevel(this.level_list[0].id, true);
            }
        }
    }

    public updateLevel(lvl_id: string, lvl_changed?: boolean) {
        this.level = lvl_id;
        this.levelChange.emit(this.level);

        if (!lvl_changed) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParamsHandling: 'merge',
                queryParams: { level: lvl_id },
            });
        } else {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { level: lvl_id },
            });
        }
    }
}