import {
    Component,
    OnInit,
    forwardRef,
    Input,
    Injectable,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
    DateAdapter,
    MatDateFormats,
    MAT_DATE_FORMATS,
    NativeDateAdapter,
} from '@angular/material/core';
import { BaseClass } from '@user-interfaces/common';
import { format } from 'date-fns';

import * as dayjs from 'dayjs';

@Injectable()
class FieldDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return format(date, 'MMMM d, yyyy');
        }
        return format(date, 'MMM yyyy');
    }
}
const FIELD_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'input',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'a-date-field',
    template: `
        <mat-form-field appearance="outline" overlay (click)="picker.open()">
            <input
                matInput
                [ngModel]="date"
                [disabled]="disabled"
                [min]="from"
                [max]="until"
                (ngModelChange)="setValue($event)"
                [matDatepicker]="picker"
            />
            <mat-datepicker-toggle
                matSuffix
                [for]="picker"
            ></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
    providers: [
        { provide: DateAdapter, useClass: FieldDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: FIELD_DATE_FORMATS },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true,
        },
    ],
})
export class DateFieldComponent
    extends BaseClass
    implements OnInit, ControlValueAccessor {
    /** Earliest date available the user is allowed to pick */
    @Input('from') public _from: number = dayjs().valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public _to: number;
    /** Position of the tooltip */
    @Input() public position: 'right' | 'left' = 'right';
    /** Offset of the tooltip */
    @Input() public offset: 'top' | 'bottom' = 'bottom';
    /** Whether form control is disabled */
    @Input() public disabled: boolean;
    /** Whether to show the calendar tooltip */
    public show_tooltip: boolean;
    /** Currently selected date */
    public date: string;

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** First allowed date on the calendar */
    public get from(): Date {
        return new Date(this._from) || dayjs().startOf('d').toDate();
    }
    /** Current date value */
    public get until(): Date {
        return new Date(this._to) || dayjs().endOf('d').add(1, 'y').toDate();
    }
    /** Display value for the current date */
    public get date_string(): string {
        return dayjs(this.date).format('DD MMM YYYY');
    }

    public ngOnInit() {
        this.date = new Date().toISOString();
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        // Keep hours and minutes of the old date
        const old_date = dayjs(this.date);
        let new_date = dayjs(new_value)
            .hour(old_date.hour())
            .minute(old_date.minute())
            .startOf('m')
            .valueOf();
        // Check that new date is before from
        if (new_date < this.from.valueOf()) {
            new_date = this.from.valueOf();
        }
        this.date = new Date(new_date).toISOString();
        if (this._onChange) {
            this._onChange(new_date);
        }
        this.show_tooltip = false;
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = new Date(value).toISOString();
        this.show_tooltip = false;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }
}
