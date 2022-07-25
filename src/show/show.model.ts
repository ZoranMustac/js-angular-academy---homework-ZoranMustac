import { IShow } from './shows-list.interface';

export class Show {
	public title: string;
	public description: string;
	public averageRating: number | null;
	public imageUrl: string;
	public id: number;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.averageRating = show.average_rating;
		this.imageUrl = show.image_url || 'https://via.placeholder.com/240x300';
		this.id = show.id;
	}
}
