import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';
import { IAuthFormData } from 'src/show/auth-form-data.interface';
import { IUser } from 'src/show/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _user$ = new BehaviorSubject<IUser | null>(null);
	public user$ = this._user$.asObservable();
	constructor(private readonly http: HttpClient) {}

	public init(): Observable<IUser> {
		if (!localStorage.getItem('token')) return EMPTY;

		return this.http.get<IUser>('https://tv-shows.infinum.academy/users/me').pipe(
			catchError(() => {
				return EMPTY;
			}),
			tap((user) => {
				this._user$.next(user);
			}),
		);
	}

	public register(data: IAuthFormData): Observable<HttpResponse<IUser>> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data, { observe: 'response' }).pipe(
			tap((response) => {
				this._user$.next(response.body);
				localStorage.setItem('token', response.headers.get('access-token') || '');
				localStorage.setItem('token-type', response.headers.get('token-type') || '');
				localStorage.setItem('uid', response.headers.get('uid') || '');
				localStorage.setItem('expiry', response.headers.get('expiry') || '');
				localStorage.setItem('client', response.headers.get('client') || '');
			}),
		);
	}

	public login(data: IAuthFormData): Observable<HttpResponse<IUser>> {
		return this.http
			.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response) => {
					this._user$.next(response.body);
					localStorage.setItem('token', response.headers.get('access-token') || '');
					localStorage.setItem('token-type', response.headers.get('token-type') || '');
					localStorage.setItem('uid', response.headers.get('uid') || '');
					localStorage.setItem('expiry', response.headers.get('expiry') || '');
					localStorage.setItem('client', response.headers.get('client') || '');
				}),
			);
	}
}
