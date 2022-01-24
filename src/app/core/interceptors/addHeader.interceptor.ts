import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const contentTypeHeader = request.headers.get('Content-Type');
        let customReq = request.clone();

        if (!contentTypeHeader) {
            customReq = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        }

        return next.handle(customReq);
    }
}