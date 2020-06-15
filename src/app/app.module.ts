import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekdayComponent } from './weekday/weekday.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendardayComponent } from './calendarday/calendarday.component';
import { SummaryComponent } from './summary/summary.component';
import { SummarydayComponent } from './summaryday/summaryday.component';
import { HoursComponent } from './hours/hours.component';
import { DecimalToHourFormatPipe } from './decimal-to-hour-format.pipe';
import { ExpensesComponent } from './expenses/expenses.component';
import { AdditionalhoursComponent } from './additionalhours/additionalhours.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AppRoutingModule } from './app-routing.module';
import { DummypageComponent } from './dummypage/dummypage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApprovalStateDirective } from './approval-state.directive';
import { DecimalToHHMMPipePipe } from './pipes/decimal-to-hhmmpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeekdayComponent,
    CalendarComponent,
    CalendardayComponent,
    SummaryComponent,
    SummarydayComponent,
    HoursComponent,
    DecimalToHourFormatPipe,
    ExpensesComponent,
    AdditionalhoursComponent,
    AddtaskComponent,
    DummypageComponent,
    HomepageComponent,
    ApprovalStateDirective,
    DecimalToHHMMPipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [DatePipe, DecimalToHHMMPipePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
