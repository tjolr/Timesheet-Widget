import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { WeekdayComponent } from '../weekday/weekday.component';
import { DatePipe } from '@angular/common';
import { CalendardayComponent } from '../calendarday/calendarday.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  month: string;
  year: number;
  weekdays: Array<Date>;

  selectedDate: Date;
  today: Date;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.getToday();
    this.getWeekdays();
    this.calendarService.selectedDate.subscribe(
      (selectedDate) => (this.selectedDate = selectedDate)
    );
  }

  onSelect(date: Date): void {
    this.calendarService.changeSelectedDate(date);
  }

  getToday(): void {
    this.calendarService.getToday().subscribe((today) => {
      this.today = today;
      this.selectedDate = this.today;
    });
  }

  goToToday(): void {
    this.calendarService.changeSelectedDate(this.today);
  }

  getWeekdays(): void {
    this.calendarService
      .generateWeekdays()
      .subscribe((weekdays) => (this.weekdays = weekdays));
  }

  datesAreOnSameDay(first: Date, second: Date): boolean {
    return first.toDateString() === second.toDateString();
  }

  dateIsWeekend(date: Date) {
    return date.getDay() == 0 || date.getDay() == 6;
  }
}
