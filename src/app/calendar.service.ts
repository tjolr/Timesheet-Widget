import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { formatDate } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {  
  private today: Date = new Date();

  private selectedDateSource = new BehaviorSubject(this.today);
  selectedDate = this.selectedDateSource.asObservable();

  constructor() { }

  changeSelectedDate(date: Date) {
    this.selectedDateSource.next(date);
  }

  getToday(): Observable<Date> {
    return of(this.today);
  }


  generateWeekdays(): Observable<Array<Date>> {
    let weekdays: Array<Date> = [];
    for (let i = 0; i < 7; i++) {
      var date = new Date();
      date.setDate(date.getDate() - i);
      weekdays.push(date);
    }
    return of(weekdays);
  }

}
