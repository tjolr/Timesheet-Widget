import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { EventService } from '../events.service';
import { Eventbyday } from '../eventbyday';

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

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
    this.getApprovalStateOnDate(this.day);
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  getHoursWorkedOnDate(date: Date): number {
    let workedHours: number = 0;
    for (const event of this.events) {
      if (
        event.isWorkHour &&
        date.toDateString() == event.date.toDateString()
      ) {
        workedHours += event.quantity;
      }
    }
    return workedHours;
  }

  getHoursWorkedOnDateFormatted(date: Date): any {
    let workedHours: number = this.getHoursWorkedOnDate(date);
    if (workedHours != 0) {
      return this.convertToHHMM(workedHours);
    } else {
      return '-';
    }
  }

  //toPipe
  convertToHHMM(info) {
    var hrs = parseInt(info);
    var min = Math.round((info - hrs) * 60);
    var min_pad: string = ('0' + String(min)).slice(-2);
    return hrs + ':' + min_pad;
  }

  getAllEventsOnDate(date: Date): Eventbyday[] {
    let eventsOnDate: Eventbyday[] = [];
    for (const event of this.events) {
      if (event.date.toDateString() === date.toDateString()) {
        eventsOnDate.push(event);
      }
    }
    return eventsOnDate;
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
