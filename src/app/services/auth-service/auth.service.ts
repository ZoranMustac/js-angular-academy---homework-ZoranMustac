import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthFormData } from 'src/show/auth-form-data.interface';
import { IUser } from 'src/show/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(data: IAuthFormData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public logIn(data: IAuthFormData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
