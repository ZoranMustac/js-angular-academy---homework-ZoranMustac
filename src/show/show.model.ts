import { IShow } from './shows-list.interface';

export class Show {
	public title: string;
	public description: string;
	public averageRating: number | null;
	public imageUrl: string;
	public uuid: number;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.averageRating = show.average_rating;
		this.imageUrl = show.image_url || 'https://via.placeholder.com/240x300';
		this.uuid = show.uuid;
	}
}

const strangerThings = new Show({
	uuid: 0,
	title: 'Stranger Things',
	description:
		'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
	average_rating: 8.7,
	image_url: 'https://i.scdn.co/image/ab67616d0000b273bd0db295c0164ddbc0584ebb',
});
