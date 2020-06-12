import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  selectedDate: Date;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.selectedDate.subscribe(selectedDate => this.selectedDate = selectedDate);
  }

}
