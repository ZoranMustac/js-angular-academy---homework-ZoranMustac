import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show-service/show.service';
import { Show } from 'src/show/show.model';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
})
export class TopRatedShowsComponent {
	public shows: Array<Show> = this.showService.fetchTopRated();

	constructor(private readonly showService: ShowService) {}
}
