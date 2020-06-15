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
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css', '../events.css'],
})
export class ExpensesComponent implements OnChanges {
  @Input() selectedDate: Date;

  events: Eventbyday[];
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(
    private eventService: EventService,
    private utilsService: UtilsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateExpensesFromEvent();
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  updateExpensesFromEvent(): void {
    this.eventService
      .getEvents()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((events) => (this.events = events));
    this.events = this.utilsService.getAllEventsOnDateWithType(
      this.selectedDate,
      this.events,
      'isExpenseType'
    );
  }
}
