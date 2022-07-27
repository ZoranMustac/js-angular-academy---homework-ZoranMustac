import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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
		return this.http.get<IUser>('https://tv-shows.infinum.academy/#tag/Users/paths/~1users~1me/get/users/me').pipe(
			tap((user) => {
				this._user$.next(user);
			}),
		);
	}

	public register(data: IAuthFormData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public login(data: IAuthFormData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data).pipe(
			tap((user) => {
				this._user$.next(user);
			}),
		);
	}
}
