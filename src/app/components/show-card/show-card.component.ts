import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from 'src/show/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() show: null | Show = null;
}
