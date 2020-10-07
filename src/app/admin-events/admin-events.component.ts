import { Component, OnInit } from '@angular/core';
import { EventService } from '../sharedservice/event.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  eventData: any = {}

  constructor(public event: EventService) { }

  ngOnInit(): void {
  }

  createEvent() {
    this.event.createEvent(this.eventData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
