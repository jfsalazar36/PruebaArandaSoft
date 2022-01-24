import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AlertaService } from "../servicios/alerta.service";

@Injectable({
    providedIn: 'root'
  })
  export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
      private router: Router,
      private alerta: AlertaService
    ) { }
    intercept(request: HttpRequest<any> | any, next: HttpHandler): Observable<HttpEvent<any>> {
      const handle = next.handle(request).pipe(tap(
        event => {
          if (event instanceof HttpResponse) {
            if (!event.body.success) {
              if (event.body.type === 'text/csv') {
                return event;
              }
              const errors = event.body.errors;
              if (errors.length > 0) {
                errors.forEach((e:any) => {
                  this.alerta.error(`${e.errorMessage}\n`);
                });
              }
            }
          }
          return event;
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.alerta.error('No se pudo establecer conexión con ArandaSoft. Intenta nuevamente', true);
          }
          return error;
        }));
  
      return handle;
    }
  }
  