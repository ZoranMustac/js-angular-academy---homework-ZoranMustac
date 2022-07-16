import { Component } from '@angular/core';
import { Show } from 'src/show/show.model';
import { IShow } from 'src/show/shows-list.interface';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	public shows = [
		{
			uuid: 0,
			title: 'Stranger Things',
			description:
				'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
			average_rating: 8.7,
			image_url: 'https://i.scdn.co/image/ab67616d0000b273bd0db295c0164ddbc0584ebb',
		},
		{
			uuid: 1,
			title: 'Breaking Bad',
			description:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			average_rating: 9.5,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg',
		},
		{
			uuid: 2,
			title: 'Game Of Thrones',
			description:
				'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
			average_rating: 9.2,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
		},
		{
			uuid: 3,
			title: 'Two And A Half Men',
			description:
				"A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.",
			average_rating: 7.1,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
		},
	].map((show: IShow) => {
		return new Show(show);
	});
}
