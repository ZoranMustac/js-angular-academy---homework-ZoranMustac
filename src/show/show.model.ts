import { IShow } from './shows-list.interface';

export class Show {
	private title: string;
	private description: string;
	private average_rating: number | null;
	private image_url: string | null;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.average_rating = show.average_rating;
		this.image_url = show.image_url;
	}
}

const strangerThings = new Show({
	title: 'Stranger Things',
	description:
		'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
	average_rating: 8.7 / 10,
	image_url:
		'https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg',
});

const breakingBad = new Show({
	title: 'Breaking Bad',
	description:
		"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
	average_rating: 9.5 / 10,
	image_url:
		'https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg',
});

const gameOfThrones = new Show({
	title: 'Game Of Thrones',
	description:
		'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
	average_rating: 9.2 / 10,
	image_url:
		'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
});
