import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show-service/show.service';
import { Show } from 'src/show/show.model';
import { IShow } from 'src/show/shows-list.interface';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	public shows: Array<Show> = this.showService.shows;

	constructor(private readonly showService: ShowService) {}
}
