import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { INavigationLink } from 'src/show/navigation-links.interface';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
	@ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;
	public readonly user$ = this.authService.user$;

	constructor(
		private observe: BreakpointObserver,
		public readonly authService: AuthService,
		private readonly router: Router,
	) {}

	ngOnInit() {
		this.observe.observe(['(max-width: 900px)']).subscribe((response) => {
			if (response.matches) {
				this.sidenav.mode = 'over';
				this.sidenav.close();
			} else {
				this.sidenav.mode = 'side';
				this.sidenav.open();
			}
		});
	}

	public onLogoutClick() {
		this.authService.logout();
	}

	public readonly navigationLinks: Array<INavigationLink> = [
		{
			url: '',
			title: 'All Shows',
			exact: true,
		},
		{
			url: 'top-rated-shows',
			title: 'Top Rated',
			exact: false,
		},
		{
			url: 'profile',
			title: 'My Profile',
			exact: false,
		},
	];
}
