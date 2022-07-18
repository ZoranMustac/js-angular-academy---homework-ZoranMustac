import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/show-service/show.service';
import { Show } from 'src/show/show.model';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent {
	constructor(private readonly showService: ShowService, private route: ActivatedRoute) {}

	public shows: Array<Show> = [
		{
			id: this.route.snapshot.params['id'],
			title: this.route.snapshot.params['title'],
			description: this.route.snapshot.params['description'],
			averageRating: this.route.snapshot.params['averageRating'],
			imageUrl: this.route.snapshot.params['imageUrl'],
		},
	];
}
