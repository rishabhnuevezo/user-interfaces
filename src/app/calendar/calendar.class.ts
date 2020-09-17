import { HashMap } from 'src/app/common/types';
import { Space } from '../spaces/space.class';
import { BaseDataClass } from '../common/base-api.class';
import { differenceInMinutes } from 'date-fns';
import { CalendarAvailability } from './calendar.interfaces';

export class Calendar extends BaseDataClass {
    /** ID of the calendar */
    public readonly id: string;
    /** Name of the calendar */
    public readonly name: string;
    /** System associated with the calendar */
    public readonly resource: Space;
    /** Primary calendar of the user */
    public readonly primary: boolean;
    /** Summary */
    public readonly summary: string;
    /** Can edit */
    public readonly can_edit: boolean;
    /** Availability */
    public readonly availability: CalendarAvailability[];

    constructor(data: HashMap = {}) {
        super(data);
        this.primary = data.primary;
        this.summary = data.summary;
        this.can_edit = data.can_edit;
        this.resource = new Space(data.system);
        this.availability = (data.availability || []).map((i) => {
            return {
                date: new Date(i.starts_at.dateTime).valueOf(),
                duration: differenceInMinutes(
                    new Date(i.ends_at.dateTime),
                    new Date(i.starts_at.dateTime)
                ),
                status: i.status,
            };
        });
    }
}