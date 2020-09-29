import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../sharedservice/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUserData: any = {}
  receivedError: String;

  constructor(public contact: ContactService) { }

  ngOnInit() {
  }

  createContact(playlistForm: NgForm) {
    const tname = this.contactUserData.name;
    this.contact.createContact(this.contactUserData)
    .subscribe(
      res => {
        alert(`Thank you ${tname}, your message has been sent!`);
        this.contactUserData = {};
      },
      /* err => console.log(err.error.message) */
      err => { this.receivedError = err.error.message }
    );
    playlistForm.form.reset();
  }

}
