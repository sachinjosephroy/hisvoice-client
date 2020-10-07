import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../shared/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrlEvent = 'http://localhost:5000/api/other/event';
  apiUrlGetEvents = 'http://localhost:5000/api/other/events';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this.apiUrlGetEvents);
  }

  createEvent(event): Observable<Event> {
    return this.http.post<Event>(this.apiUrlEvent, event);
  }
}
