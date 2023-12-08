import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { IAuthFormData } from 'src/show/auth-form-data.interface';
import { IUser } from 'src/show/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _user$ = new BehaviorSubject<IUser | null>(null);
	public user$ = this._user$.asObservable();
	constructor(private readonly http: HttpClient, private readonly router: Router) {}

	public init(): Observable<IUser> {
		if (!localStorage.getItem('token')) return EMPTY;

		return this.http.get<{ user: IUser }>('https://tv-shows.infinum.academy/users/me').pipe(
			catchError(() => {
				return EMPTY;
			}),
			map((response) => {
				return response.user;
			}),
			tap((user) => {
				this._user$.next(user);
			}),
		);
	}

	public register(data: IAuthFormData): Observable<IUser> {
		return this.http
			.post<{ user: IUser }>('https://tv-shows.infinum.academy/users', data, { observe: 'response' })
			.pipe(
				tap((response) => {
					this._user$.next(response.body!.user);
					localStorage.setItem('token', response.headers.get('access-token') || '');
					localStorage.setItem('token-type', response.headers.get('token-type') || '');
					localStorage.setItem('uid', response.headers.get('uid') || '');
					localStorage.setItem('expiry', response.headers.get('expiry') || '');
					localStorage.setItem('client', response.headers.get('client') || '');
				}),
				map((response) => {
					return response.body!.user;
				}),
			);
	}

	public login(data: IAuthFormData): Observable<IUser> {
		return this.http
			.post<{ user: IUser }>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response) => {
					this._user$.next(response.body!.user);
					localStorage.setItem('token', response.headers.get('access-token') || '');
					localStorage.setItem('token-type', response.headers.get('token-type') || '');
					localStorage.setItem('uid', response.headers.get('uid') || '');
					localStorage.setItem('expiry', response.headers.get('expiry') || '');
					localStorage.setItem('client', response.headers.get('client') || '');
				}),
				map((response) => {
					return response.body!.user;
				}),
			);
	}

	public logout() {
		localStorage.clear();
		this._user$.next(null);
		this.router.navigate(['login']);
	}
}
