import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { onlineState } from '@placeos/ts-client';
import { current_user } from '@user-interfaces/common';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedAdminGuard implements CanActivate, CanLoad {
    constructor(private _router: Router) {}

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user = await current_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups.includes('placeos_admin');
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }

    public async canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Promise<boolean> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user = await current_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups.includes('placeos_admin');
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
