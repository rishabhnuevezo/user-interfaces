import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseClass, currentUser } from '@user-interfaces/common';
import { Booking, queryBookings } from '@user-interfaces/bookings';
import { first } from 'rxjs/operators';

import { DeskFlowStateService } from './desk-flow-state.service';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

@Component({
    selector: 'desk-flow-checkin',
    template: `
        <div
            class="fixed inset-0 bg-secondary text-white flex items-center justify-center"
        >
            <div
                class="flex flex-col items-center space-y-4"
                *ngIf="loading; else state_display"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </div>
        <ng-template #state_display>
            <div class="flex flex-col items-center space-y-4">
                <app-icon
                    [class]="
                        'rounded-full text-3xl ' + (error ? 'bg-error' : 'bg-success')
                    "
                    >{{ error ? 'close' : 'done' }}</app-icon
                >
                <p>{{ error || 'Successfully checked in to desk.' }}</p>
                <a button mat-button [routerLink]="['/book', 'qr']">Return</a>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class DeskFlowCheckinComponent extends BaseClass {
    public loading = '';
    public error = '';

    constructor(
        private _state: DeskFlowStateService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('checkin')) {
                    this.checkDesk(params.get('checkin'));
                } else if (params.has('zone')) {
                    this.checkinFromZone(params.get('zone'));
                }
            })
        );
    }

    public checkDesk(desk_id: string) {
        this.loading = 'Checking for existing desk reservation...';
        this._state.todays_bookings
            .pipe(first((_) => !!_))
            .subscribe((bookings) => this.checkInBooking(desk_id, bookings));
    }

    public async checkInBooking(desk_id: string, bookings: Booking[]) {
        const bkn = bookings.find((bkn) => bkn.asset_id === desk_id);
        if (bkn) {
            this.loading = 'Checkin in reservation...';
            await this._state
                .checkin(desk_id)
                .catch(
                    (err) =>
                        (this.error = `Error checking in desk. Error: ${
                            err.statusText || err.message || err
                        }`)
                );
        } else {
            this.error = 'Unable to find a reservation for the given desk.';
        }
        this.loading = '';
    }

    private async checkinFromZone(zone: string) {
        this.loading = 'Searching for existing desk reservation...';
        const bookings = await queryBookings({
            period_start: getUnixTime(startOfDay(new Date())),
            period_end: getUnixTime(endOfDay(new Date())),
            type: 'desk',
            zones: zone,
            email: currentUser().email
        }).toPromise();
        if (!bookings?.length) {
            this.loading = '';
            this.timeout('new_booking', () => this._router.navigate(['/explore', zone]));
            return this.error = `Unable to find exisiting desk reservation`
        }
        this.checkInBooking(bookings[0].asset_id, bookings);
        this.loading = '';
    }
}
