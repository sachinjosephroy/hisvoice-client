import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../shared/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = 'http://localhost:5000/api/other/contact';
  apiUrlGetContacts = 'http://localhost:5000/api/contacts';
  /* apiUrl = 'https://node-db-tutorial10.herokuapp.com/api/other/contact';
  apiUrlGetContacts = 'https://node-db-tutorial10.herokuapp.com/api/contacts'; */

  constructor(private http: HttpClient) { }

  createContact(contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  getContacts() {
    return this.http.get(this.apiUrlGetContacts);
  }
}
