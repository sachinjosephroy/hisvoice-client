import { Component, OnInit } from '@angular/core';
import { ContactService } from '../sharedservice/contact.service';

@Component({
  selector: 'app-retrieve-contacts',
  templateUrl: './retrieve-contacts.component.html',
  styleUrls: ['./retrieve-contacts.component.css']
})
export class RetrieveContactsComponent implements OnInit {

  Contacts: any = [];

  constructor(public contact: ContactService) { }

  ngOnInit() {
    this.contact.getContacts()
    .subscribe(
      res => this.Contacts = res,
      err => console.log(err)
    );
  }

}