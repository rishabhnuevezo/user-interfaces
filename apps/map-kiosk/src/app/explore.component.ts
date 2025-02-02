import { Component } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';
import {
    ExploreDesksService,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@user-interfaces/explore';

@Component({
    selector: '[app-explore]',
    template: `
        <div
            class="absolute top-0 left-0 bg-white rounded-br-xl p-2 z-10 shadow"
        >
            <img class="w-32" [src]="logo?.src" />
        </div>
        <!-- <explore-map-stack class="z-0"></explore-map-stack> -->
        <i-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
        ></i-map>
        <explore-zoom-controls
            class="absolute top-1/2 transform -translate-y-1/2 right-0"
        ></explore-zoom-controls>
        <explore-level-select
            class="absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
        ></explore-level-select>
    `,
    styles: [`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #f0f0f0;
        }
    `],
    providers: [ExploreSpacesService, ExploreDesksService, ExploreZonesService],
})
export class ExploreComponent {
    public get logo() {
        return this._settings.get('app.logo');
    }
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._state.map_labels;
    /** Observable for the active map */
    public readonly options = this._state.options;

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _settings: SettingsService
    ) {}
}
