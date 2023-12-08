import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(
			request.clone({
				headers: new HttpHeaders({
					'access-token': localStorage.getItem('token') || '',
					'token-type': localStorage.getItem('token-type') || '',
					uid: localStorage.getItem('uid') || '',
					expiry: localStorage.getItem('expiry') || '',
					client: localStorage.getItem('client') || '',
				}),
			}),
		);
	}
}
