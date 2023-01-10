import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { BusyService } from '../_services/busy.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor( private busyService:BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    
    return next.handle(request).pipe(//once the request comes back we its completed so we can turn off out busy  spinner 
      delay(500),
      finalize(()=>{
        this.busyService.idle();
      })
    ); 
  }
}
