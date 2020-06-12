import { Injectable } from '@angular/core';
import { EVENTS } from './mock-data';
import { Observable, of } from 'rxjs';
import { Eventbyday } from './eventbyday';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<Eventbyday[]> {
    return of(EVENTS);
  }

}
