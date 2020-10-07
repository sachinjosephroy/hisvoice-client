import { Component, OnInit } from '@angular/core';
import { EventService } from '../sharedservice/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events: any = [];

  constructor(public event: EventService) { }

  ngOnInit(): void {
    this.event.getEvents()
    .subscribe(
      res => this.Events = res,
      err => console.log(err)      
    );
  }

}
