import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { EventService } from '../events.service';
import { UtilsService } from '../utils.service';
import { Eventbyday } from '../eventbyday';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css', '../events.css'],
})
export class HoursComponent implements OnChanges {
  @Input() selectedDate: Date;

  events: Eventbyday[];
  firstTaskStart: Date;
  lastTaskEnd: Date;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(
    private eventService: EventService,
    private utilsService: UtilsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateHoursFromEvent();
    this.updateStartEndTime();
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  updateHoursFromEvent(): void {
    this.eventService
      .getEvents()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((events) => (this.events = events));
    this.events = this.utilsService.getAllEventsOnDateWithType(
      this.selectedDate,
      this.events,
      'isHoursEventType'
    );
  }

  updateStartEndTime(): void {
    const dates: Date[] = [];
    for (const event of this.events) {
      dates.push(event.firstTastStart);
      dates.push(event.lastTaskEnd);
    }
    dates.sort(this.sortDates);

    this.firstTaskStart = dates[0];
    this.lastTaskEnd = dates[dates.length - 1];
  }

  sortDates(date1: Date, date2: Date) {
    let firstDate = new Date(date1).getTime();
    let secondDate = new Date(date2).getTime();
    return firstDate > secondDate ? 1 : -1;
  }
}
