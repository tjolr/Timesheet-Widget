import { Injectable } from '@angular/core';
import { Eventbyday } from './eventbyday';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getAllEventsOnDate(date: Date, events: Eventbyday[]): Eventbyday[] {
    let eventsOnDate: Eventbyday[] = [];
    for (const event of events) {
      if (event.date.toDateString() === date.toDateString()) {
        eventsOnDate.push(event);
      }
    }
    return eventsOnDate;
  }

  getAllEventsOnDateWithType(
    date: Date,
    events: Eventbyday[],
    eventType: string
  ): Eventbyday[] {
    let eventsOnDate: Eventbyday[] = [];
    for (const event of events) {
      if (
        event.date.toDateString() === date.toDateString() &&
        (event[eventType])
      ) {
        eventsOnDate.push(event);
      }
    }
    return eventsOnDate;
  }
}
