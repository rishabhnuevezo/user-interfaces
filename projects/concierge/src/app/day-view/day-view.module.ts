import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { DayViewComponent } from './day-view.component';
import { DayviewTopbarComponent } from './dayview-topbar.component';
import { DayviewTimelineComponent } from './dayview-timeline.component';
import { DayviewSpaceComponent } from './dayview-space.component';
import { DayviewEventComponent } from './dayview-event.component';

const ROUTES: Route[] = [{ path: '', component: DayViewComponent }];

@NgModule({
    declarations: [
        DayViewComponent,
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent
    ],
    imports: [CommonModule, FormsModule, UIModule, RouterModule.forChild(ROUTES)],
})
export class DayViewModule {}
