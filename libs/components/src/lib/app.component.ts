import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import {
    clientId,
    invalidateToken,
    isMock,
    refreshToken,
    token,
} from '@placeos/ts-client';

import {
    BaseClass,
    current_user,
    currentUser,
    HotkeysService,
    notifySuccess,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
} from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

import { SpacesService } from '../../../spaces/src/lib/spaces.service';
import { setDefaultCreator } from '../../../events/src/lib/event.class';
import { addHours } from 'date-fns';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

export function initSentry(dsn: string, sample_rate: number = 0.2) {
    if (!dsn) return;
    Sentry.init({
        dsn,
        integrations: [
            new Integrations.BrowserTracing({
                tracingOrigins: ['localhost', location.origin],
                routingInstrumentation: Sentry.routingInstrumentation,
            }),
        ],
        tracesSampleRate: sample_rate,
    });
}

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
        <div *ngIf="loading | async" class="loading-block">
            <div class="info-block center">
                <div class="icon">
                    <mat-spinner [diameter]="64"></mat-spinner>
                </div>
            </div>
        </div>
    `,
    styles: [``]
})
export class AppComponent extends BaseClass implements OnInit {
    private _loading = new BehaviorSubject<boolean>(false);
    /** Observable for whether the application is initialising */
    public readonly loading = this._loading.asObservable();

    constructor(
        private _tracing: Sentry.TraceService,
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _hotkey: HotkeysService,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public async ngOnInit() {
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
            localStorage.setItem(
                'mock',
                `${localStorage.getItem('mock') !== 'true'}`
            );
            location.reload();
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
            this._clipboard.copy(`${token()}|${refreshToken()}`);
            notifySuccess('Successfully copied token.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
            navigator.clipboard?.readText().then((tkn) => {
                const parts = tkn.split('|');
                localStorage.setItem(`${clientId()}_access_token`, `${tkn[0]}`);
                localStorage.setItem(
                    `${clientId()}_refresh_token`,
                    `${tkn[1]}`
                );
                localStorage.setItem(
                    `${clientId()}_expires_at`,
                    `${addHours(new Date(), 6).valueOf()}`
                );
                notifySuccess('Successfully pasted token.');
                setTimeout(() => location.reload(), 2000);
            });
        });
        setNotifyOutlet(this._snackbar);
        this._loading.next(true);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock = !!this._settings.get('mock');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        this._loading.next(false);
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(currentUser());
        initSentry(this._settings.get('app.sentry_dsn'));
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) {
            return;
        }
        console.error('Error initialising user.');
        invalidateToken();
        location.reload();
    }
}
