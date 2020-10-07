import { Component, OnInit } from '@angular/core';
import { MemberService } from '../sharedservice/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  Sopranos: any = [];
  Altos: any = [];
  Tenors: any = [];
  Basses: any = [];
  FormerMembers: any = [];

  constructor(public member: MemberService) { }

  ngOnInit(): void {
    /* this.loadScript('../assets/js/tabActive.js'); */

    this.member.getSopranos()
    .subscribe(
      res => this.Sopranos = res,
      err => console.log(err)      
    );

    this.member.getAltos()
    .subscribe(
      res => this.Altos = res,
      err => console.log(err)      
    );

    this.member.getTenors()
    .subscribe(
      res => this.Tenors = res,
      err => console.log(err)      
    );

    this.member.getBasses()
    .subscribe(
      res => this.Basses = res,
      err => console.log(err)      
    );

    this.member.getFormerMembers()
    .subscribe(
      res => this.FormerMembers = res,
      err => console.log(err)      
    );
  }

  public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    }

}
