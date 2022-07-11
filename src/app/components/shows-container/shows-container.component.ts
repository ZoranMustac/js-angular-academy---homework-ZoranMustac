import { Component } from '@angular/core';
import { Show } from '../../../show/show.model';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	public shows: Array<Show> = [
		{
			title: 'Stranger Things',
			description:
				'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
			average_rating: 8.7,
			image_url:
				'https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg',
		},
		{
			title: 'Breaking Bad',
			description:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			average_rating: 9.5,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg',
		},
		{
			title: 'Game Of Thrones',
			description:
				'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
			average_rating: 9.2,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
		},
	];
}
