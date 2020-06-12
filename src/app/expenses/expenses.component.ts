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

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css', '../events.css'],
})
export class ExpensesComponent implements OnChanges {
  @Input() selectedDate: Date;

  events: Eventbyday[];

  constructor(
    private eventService: EventService,
    private utilsService: UtilsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateExpensesFromEvent();
  }

  updateExpensesFromEvent(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
    this.events = this.utilsService.getAllEventsOnDateWithType(
      this.selectedDate,
      this.events,
      'isExpenseType'
    );
  }
}
