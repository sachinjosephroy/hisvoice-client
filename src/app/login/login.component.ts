import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { RegisterService } from '../sharedservice/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {};

  constructor(public login: RegisterService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.login.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/home']);
        },
        err => console.log(err)
      );
  }

}
