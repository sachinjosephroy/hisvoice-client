import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegisterService } from '../sharedservice/register.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let registerService = this.injector.get(RegisterService);
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + registerService.getToken())
      }
    );
    return next.handle(tokenizedReq);
  }
}
