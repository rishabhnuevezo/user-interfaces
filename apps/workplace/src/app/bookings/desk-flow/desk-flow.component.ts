import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass, currentUser, current_user, notifyError, notifySuccess } from '@user-interfaces/common';
import { ExploreStateService } from '@user-interfaces/explore';
import { first } from 'rxjs/operators';

import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'app-desk-flow',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main class="flex flex-1 flex-col relative h-1/2" *ngIf="!checkin">
            <div class="w-full text-center p-2 bg-white shadow z-10 relative">
                Request a Desk
            </div>
            <div map class="flex-1 w-full relative">
                <i-map
                    [src]="url | async"
                    [zoom]="(positions | async).zoom"
                    [center]="(positions | async).center"
                    [styles]="styles | async"
                    [actions]="actions | async"
                    [features]="features | async"
                ></i-map>
                <explore-zoom-controls
                    class="absolute bottom-0 right-0"
                ></explore-zoom-controls>
                <explore-map-controls
                    full
                    class="absolute top-0 left-0"
                ></explore-map-controls>
                <div
                    info
                    class="absolute bottom-0 rounded p-2 bg-white shadow text-center"
                >
                    Click/Tap an available desk to book it.
                </div>
                <div
                    date
                    class="absolute top-0 left-0 sm:right-0 sm:left-auto p-2"
                >
                    <a-date-field
                        class="w-full"
                        [ngModel]="(options | async).date"
                        (ngModelChange)="setDate($event)"
                    ></a-date-field>
                </div>
                <ng-container *ngIf="loading | async">
                    <div
                        load-state
                        class="absolute bottom-0 left-0 p-4 flex flex-col justify-center items-center"
                    >
                        <mat-spinner [diameter]="48"></mat-spinner>
                    </div>
                </ng-container>
            </div>
            <a
                button
                mat-button
                class="rounded-3xl absolute bottom-2 left-2 shadow"
                [routerLink]="['/book', 'desks']"
            >
                Desk List
            </a>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
        <ng-template #checkin_state>
            <main
                class="flex-1 flex flex-col items-center justify-center w-full"
            >
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>Checking in desk...</p>
            </main>
        </ng-template>
        <ng-container *ngIf="success">
            <booking-success calendar="desks" route="desks" type="desk"></booking-success>
        </ng-container>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            [info] {
                left: 50%;
                transform: translate(-50%, -1rem);
                max-width: 50%;
            }

            @media screen and (max-width: 640px) {
                [date] {
                    transform: translateY(60%);
                    width: 100%;
                }
            }
        `,
    ],
    providers: [DeskFlowStateService],
})
export class DeskFlowComponent extends BaseClass implements OnInit, OnDestroy {
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
    /** Observable for the active map */
    public readonly loading = this._desks.loading;
    /** Observable for the active map */
    public readonly options = this._desks.options;

    public checkin: boolean;

    public success: boolean;

    public show_menu: boolean = false;

    public readonly setDate = (date) => this._desks.setOptions({ date });

    constructor(
        private _state: ExploreStateService,
        private _desks: DeskFlowStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
        this._desks.setHost(currentUser());
        this._state.setOptions({ show_zones: false });
        this._desks.startPolling();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('checkin')) {
                    this.checkin = true;
                    const success = await this._desks.checkin(
                        params.get('checkin')
                    );
                    this.checkin = false;
                    if (!success) return notifyError('Error checking in desk.');
                    notifySuccess('Successfully checked in to desk');
                }
                this.success = params.has('success');
            })
        );
    }

    public ngOnDestroy() {
        this._desks.stopPolling();
    }
}
