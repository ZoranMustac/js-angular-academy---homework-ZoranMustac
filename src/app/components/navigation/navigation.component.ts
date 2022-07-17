import { Component } from '@angular/core';
import { INavigationLink } from 'src/show/navigation-links.interface';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	public readonly navigationLinks: Array<INavigationLink> = [
		{
			url: '',
			title: 'All Shows',
		},
		{
			url: 'top-rated-shows',
			title: 'Top Rated Shows',
		},
		{
			url: 'show-details/:id',
			title: 'Show Details',
		},
	];
}
