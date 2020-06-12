import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventService } from '../events.service';
import { UtilsService } from '../utils.service';
import { Eventbyday } from '../eventbyday';

@Component({
  selector: 'app-additionalhours',
  templateUrl: './additionalhours.component.html',
  styleUrls: ['./additionalhours.component.css', '../events.css']
})
export class AdditionalhoursComponent implements OnChanges {
  @Input() selectedDate: Date;

  events: Eventbyday[];

  constructor(
    private eventService: EventService,
    private utilsService: UtilsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateAdditionalHoursFromEvent();
  }

  updateAdditionalHoursFromEvent(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
    this.events = this.utilsService.getAllEventsOnDateWithType(
      this.selectedDate,
      this.events,
      "isAdditionalHoursEventType"
    );
  }
}
