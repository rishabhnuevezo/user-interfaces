
export class Desk {
    /** ID of the desk also map_id */
    public readonly id: string;
    /** Name of the desk */
    public readonly name: string;
    /** Whether desk is available / bookable */
    public readonly bookable: boolean;
    /** Zone/Level of the desk */
    public readonly zone: any;
    /** Group/Department allocated to the desk */
    public readonly groups: string[];

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.bookable = data.bookable;
        this.zone = data.zone;
        this.groups = data.groups || [];
    }

    public format() {
        const { id, name, bookable, groups } = this;
        return {
            id,
            name,
            bookable,
            groups,
        };
    }
}
