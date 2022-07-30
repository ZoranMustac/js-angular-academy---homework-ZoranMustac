import { IUser } from './user.interface';

export interface IShowReview {
	id: number;
	show_id: number;
	comment: string;
	rating: number;
	user: IUser;
}
