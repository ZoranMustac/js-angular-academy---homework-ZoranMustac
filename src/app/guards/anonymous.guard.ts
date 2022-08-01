import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
	constructor(private readonly authService: AuthService, private readonly router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authService.user$.pipe(
			map((user) => {
				if (!user) {
					return true;
				}

				return this.router.createUrlTree(['/']);
			}),
		);
	}
}
