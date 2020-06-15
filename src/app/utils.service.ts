import { Injectable } from '@angular/core';
import { Eventbyday } from './eventbyday';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getAllEventsOnDate(date: Date, events: Eventbyday[]): Eventbyday[] {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  }

  getAllEventsOnDateWithType(
    date: Date,
    events: Eventbyday[],
    eventType: string
  ): Eventbyday[] {
    return events.filter(
      (event) =>
        event.date.toDateString() === date.toDateString() && event[eventType]
    );
  }
}
