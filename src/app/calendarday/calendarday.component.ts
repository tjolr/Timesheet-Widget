import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { EventService } from '../events.service';
import { Eventbyday } from '../eventbyday';
import { DecimalToHHMMPipePipe } from '../pipes/decimal-to-hhmmpipe.pipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-calendarday',
  templateUrl: './calendarday.component.html',
  styleUrls: ['./calendarday.component.css'],
})
export class CalendardayComponent implements OnInit {
  @Input() day: Date;
  @Input() selectedDate: Date;
  @Input() today: Date;
  @Input() weekend: boolean;

  events: Eventbyday[];
  approvalColor: string;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(
    private eventService: EventService,
    private decimalToHHMMPipe: DecimalToHHMMPipePipe
  ) {}

  ngOnInit(): void {
    this.getEvents();
    this.getApprovalStateOnDate(this.day);
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getEvents(): void {
    this.eventService
      .getEvents()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((events) => (this.events = events));
  }

  getHoursWorkedOnDate(date: Date): number {
    let workedHours: number = 0;
    this.events
      .filter(
        (event) =>
          event.isWorkHour && date.toDateString() === event.date.toDateString()
      )
      .map((event) => (workedHours += event.quantity));
    return workedHours;
  }

  getHoursWorkedOnDateFormatted(date: Date): any {
    let workedHours: number = this.getHoursWorkedOnDate(date);
    if (workedHours != 0) {
      return this.decimalToHHMMPipe.transform(workedHours);
    } else {
      return '-';
    }
  }

  getAllEventsOnDate(date: Date): Eventbyday[] {
    return this.events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  }

  //Directive
  getApprovalStateOnDate(date: Date): void {
    let allTasksApproved: boolean = true;
    let events = this.getAllEventsOnDate(date);
    if (events.length == 0) {
      this.approvalColor = 'transparent';
      return;
    }

    for (const event of events) {
      if (event.isRejected) {
        this.approvalColor = 'rgb(248, 101, 101)';
        return;
      }
      if (!event.isApproved) {
        allTasksApproved = false;
      }
    }
    if (allTasksApproved) {
      this.approvalColor = 'rgb(51, 230, 111)';
      return;
    } else {
      this.approvalColor = '#a1a1a1';
      return;
    }
  }
}
