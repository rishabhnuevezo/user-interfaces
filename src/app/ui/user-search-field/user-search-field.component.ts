import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map, catchError } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { User } from 'src/app/users/user.class';
import { StaffService } from 'src/app/users/staff.service';

@Component({
    selector: 'a-user-search-field',
    templateUrl: './user-search-field.component.html',
    styleUrls: ['./user-search-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserSearchFieldComponent),
            multi: true,
        },
    ],
})
export class UserSearchFieldComponent extends BaseClass implements OnInit, ControlValueAccessor {
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Limit available options to these */
    @Input() public options: User[];
    /** Currently selected user */
    public active_user: User;
    /** User list to display */
    public user_list: User[];
    /** Whether user list is loading */
    public loading: boolean;
    /** Current display value of the search input field  */
    public search_str: string;
    /** List of users from an API search */
    public search_results$: Observable<User[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();

    /** Form control on change handler */
    private _onChange: (_: User) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User) => void;

    constructor(private _users: StaffService) {
        super();
    }

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return this.options && this.options.length > 0
                    ? Promise.resolve(this.options)
                    : query.length >= 3
                    ? (this._users.query({ q: query.slice(0, 3), cache: 60 * 1000 }) as Promise<
                          User[]
                      >)
                    : Promise.resolve([]);
            }),
            catchError((err) => of([])),
            map((list: User[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter(
                    (item) =>
                        item.name.toLowerCase().includes(search) ||
                        item.email.toLowerCase().includes(search)
                );
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.user_list = list))
        );
    }

    /**
     * Reset the search string back to the name of the active user
     */
    public resetSearchString() {
        if (this.active_user) {
            this.search_str = this.active_user.name;
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User): void {
        this.active_user = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.resetSearchString();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User) {
        this.active_user = value;
        this.resetSearchString();
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: User) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: User) => void): void {
        this._onTouch = fn;
    }
}
