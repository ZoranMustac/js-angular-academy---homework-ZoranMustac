import { EventEmitter, Injectable, Input } from '@angular/core';
import { Show } from 'src/show/show.model';
import { IShow } from 'src/show/shows-list.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	public shows = [
		{
			id: 0,
			title: 'Stranger Things',
			description:
				'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
			averageRating: 8.7,
			imageUrl: 'https://i.scdn.co/image/ab67616d0000b273bd0db295c0164ddbc0584ebb',
		},
		{
			id: 1,
			title: 'Breaking Bad',
			description:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			averageRating: 9.5,
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg',
		},
		{
			id: 2,
			title: 'Game Of Thrones',
			description:
				'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
			averageRating: 9.2,
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
		},
		{
			id: 3,
			title: 'Heroes',
			description:
				'Common people discover that they have super powers. Their lives intertwine as a devastating event must be prevented.',
			averageRating: 7.6,
			imageUrl: 'https://static.posters.cz/image/750/posteri/heroes-teaser-i1635.jpg',
		},
		{
			id: 4,
			title: 'Under The Dome',
			description:
				'An invisible and mysterious force field descends upon a small actual town of Chester\'s Mill, Maine, USA, trapping residents inside, cut off from the rest of civilization. The trapped townspeople must discover the secrets and purpose of the "dome" or "sphere" and its origins, while coming to learn more than they ever knew about each other and animals too.',
			averageRating: 6.5,
			imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjA3NDk0NzM1MF5BMl5BanBnXkFtZTcwOTYxMTk3OQ@@._V1_.jpg',
		},
		{
			id: 5,
			title: 'The Sopranos',
			description:
				'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.',
			averageRating: 9.2,
			imageUrl: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-1487303638.jpg',
		},
		{
			id: 6,
			title: 'Falling Skies',
			description:
				'Survivors of an alien attack on earth gather together to fight for their lives and fight back.',
			averageRating: 7.1,
			imageUrl: 'https://m.media-amazon.com/images/I/71z+8TdIy4L._SL1024_.jpg',
		},
		{
			id: 7,
			title: 'Sons Of Anarchy',
			description: 'A biker struggles to balance being a father and being involved in an outlaw motorcycle club.',
			averageRating: 8.6,
			imageUrl:
				'https://static.posters.cz/image/750/uokvireni-plakati-pleksi-sons-of-anarchy-jax-back-i23608.jpg',
		},
	];

	public fetchAll() {
		this.shows.map((obj) => obj.id);

		return this.shows;
	}

	public fetchTopRated() {
		this.shows.forEach((obj) => {
			let rating = obj.averageRating;
			if (rating !== null && rating >= 8 && rating !== 0) {
				this.shows.push(obj);
			}
		});

		return this.shows;
	}

	public OnClickDetails = new EventEmitter<Show>();

	public fetchDetailsShow(show: Show) {
		this.OnClickDetails.emit(show);
	}
}
