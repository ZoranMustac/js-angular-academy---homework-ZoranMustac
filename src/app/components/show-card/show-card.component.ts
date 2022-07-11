import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from 'src/show/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() public title = new EventEmitter<Show>();
	@Input() public imageUrl = new EventEmitter<Show>();
	@Input() public rating = new EventEmitter<Show>();

	public addTitle(show: Show) {
		this.title.emit(show);
		this.imageUrl.emit(show);
		this.rating.emit(show);
	}
}
