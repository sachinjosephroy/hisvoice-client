import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../sharedservice/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  constructor(public registerService: RegisterService) { }

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.loggedIn();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  loggedIn() {
    console.log(this.registerService.loggedIn());
  }

}
