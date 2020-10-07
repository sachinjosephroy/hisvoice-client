import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminMembersService } from '../sharedservice/admin-members.service';

@Component({
  selector: 'app-admin-members',
  templateUrl: './admin-members.component.html',
  styleUrls: ['./admin-members.component.css']
})
export class AdminMembersComponent implements OnInit {

  sopranoData: any = {}
  altoData: any = {}
  tenorData: any = {}
  bassData: any = {}
  formerMemberData: any = {}

  constructor(public member: AdminMembersService) { }

  ngOnInit() {
  }

  createSoprano() {
    this.member.createSoprano(this.sopranoData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  createAlto() {
    this.member.createAlto(this.altoData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  createTenor() {
    this.member.createTenor(this.tenorData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  createBass() {
    this.member.createBass(this.bassData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  createFormerMember() {
    this.member.createFormerMember(this.formerMemberData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}

