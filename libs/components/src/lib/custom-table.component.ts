import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseClass, HashMap } from '@user-interfaces/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'custom-table',
    template: `
        <cdk-table [dataSource]="data_source" matSort>
            <ng-container *ngFor="let column of columns; let i = index">
                <ng-container [cdkColumnDef]="column">
                    <div
                        cdk-header-cell
                        class="capitalize p-2"
                        [style.width]="(column_size[i] || '8') + 'em'"
                        [style.flex]="column_size[i] === 'flex' ? '1' : ''"
                        *cdkHeaderCellDef
                        mat-sort-header
                    >
                        {{ display_column[i] || column }}
                    </div>
                    <div
                        cdk-cell
                        class="p-2 truncate"
                        [style.width]="(column_size[i] || '8') + 'em'"
                        [style.flex]="column_size[i] === 'flex' ? '1' : ''"
                        *cdkCellDef="let row"
                        [title]="row[column]"
                    >
                        <ng-container *ngIf="!template[column]">{{ row[column] }}</ng-container>
                        <ng-container *ngIf="template[column]">
                            <ng-container
                                *ngTemplateOutlet="template[column]; context: { data: row[column] }"
                            ></ng-container>
                        </ng-container>
                    </div>
                </ng-container>
            </ng-container>

            <cdk-header-row
                class="flex items-center"
                *cdkHeaderRowDef="columns"
            ></cdk-header-row>
            <cdk-row
                row
                class="flex"
                *cdkRowDef="let row; columns: columns"
            ></cdk-row>
            <ng-template cdkNoDataRow>
                <p>{{ empty || 'No data to display' }}</p>
            </ng-template>
        </cdk-table>
        <div footer [hidden]="!pagination">
            <mat-paginator
                [pageSize]="page_size"
                [hidePageSize]="true"
                [showFirstLastButtons]="true"
            >
            </mat-paginator>
        </div>
    `,
    styles: [
        `
            cdk-header-row {
                position: sticky;
                border-bottom: 1px solid #999;
                font-weight: 500;
                text-transform: capitalize;
                min-height: 3rem;
            }

            cdk-row {
                border-bottom: 1px solid rgba(0,0,0, .1 );
            }

            cdk-row:hover {
                background-color: #f0f0f0;
            }
        `,
    ],
})
export class CustomTableComponent<T extends {} = any>
    extends BaseClass
    implements AfterViewInit, OnChanges {
    /** Data source to render in the table */
    @Input() public dataSource: T[] | Observable<T[]>;
    /** Whether table should use pagination */
    @Input() public pagination: boolean = false;
    /** Number of items to display on pagination pages */
    @Input() public page_size: number = 7;
    /** Filter string to apply to table listings */
    @Input() public filter: string;
    /** Values to display for column headers */
    @Input() public display_column: string[];
    /** List of columns to display in the table */
    @Input() public columns: string[];
    /** Size of the columns in em or flex for a flexible size */
    @Input() public column_size: string[] = [];
    /** Displayed value when the table is empty */
    @Input() public empty: string;
    /** Displayed value when the table is empty */
    @Input() public template: HashMap<TemplateRef<any>> = {};

    public data_source: MatTableDataSource<T> = new MatTableDataSource([]);

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    public ngAfterViewInit() {
        this.data_source.sort = this._sort;
        this.data_source.paginator = this.pagination ? this._paginator : null;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.dataSource && this.dataSource) {
            if (this.dataSource instanceof Observable) {
                this.subscription(
                    'data',
                    this.dataSource.subscribe((data) => (this.data_source.data = data))
                );
            } else {
                this.data_source.data = this.dataSource;
            }
        }
        if (changes.pagination) {
            console.log('Pagination:', this.pagination, this._paginator);
            this.data_source.paginator = this.pagination ? this._paginator : null;
        }
        if (changes.filter) {
            this.data_source.filter = (this.filter || '').trim().toLowerCase();
        }
        if (changes.columns && this.columns) {
            this.display_column = this.columns.map((_) => _.split('_').join(' '));
        }
        if (!this.column_size) {
            this.column_size = [];
        }
    }
}
