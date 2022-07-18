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

	public show: Show | undefined = this.showService.fetchById(parseInt(this.route.snapshot.params['id']));
}
