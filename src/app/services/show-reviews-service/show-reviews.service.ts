import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IReviews } from 'src/show/reviews.interface';
import { IShowReview } from 'src/show/show-reviews.interface';
import { IShow } from 'src/show/shows-list.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowReviewsService {
	constructor(private readonly http: HttpClient) {}

	public getReviews(show_id: number): Observable<Array<IShowReview>> {
		return this.http.get<IReviews>(`https://tv-shows.infinum.academy/shows/${show_id}/reviews`).pipe(
			map((reviews) => {
				return reviews.reviews;
			}),
		);
	}

	public addReview(data: IShowReview): Observable<IShowReview> {
		return this.http.post<IShowReview>(`https://tv-shows.infinum.academy/reviews`, data);
	}

	public add(): FormGroup {
		return new FormGroup({
			comment: new FormControl('', Validators.required),
			rating: new FormControl('', Validators.required),
		});
	}
}
