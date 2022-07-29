import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IReviews } from 'src/show/reviews.interface';
import { IShowReview } from 'src/show/show-reviews.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowReviewsService {
	private reviews$: BehaviorSubject<Array<IShowReview>>;

	constructor(private readonly http: HttpClient) {
		this.reviews$ = new BehaviorSubject<Array<IShowReview>>([
			{
				id: 10,
				show_id: 1,
				comment: 'Great show',
				rating: 9.2,
			},
			{
				id: 11,
				show_id: 6,
				comment: 'Great show',
				rating: 9.2,
			},
			{
				id: 12,
				show_id: 5,
				comment: 'Great show',
				rating: 9.2,
			},
		]);
	}

	public getReviews(show_id: number): Observable<Array<IShowReview>> {
		return this.reviews$.pipe(
			map((reviews) => {
				return reviews.filter((review) => {
					return review.show_id === show_id;
				});
			}),
		);
		/*
		return this.http.get<IReviews>(`https://tv-shows.infinum.academy/shows/${show_id}/reviews`).pipe(
			map((reviews) => {
				return reviews.reviews.map((review) => {
					return review.show_id === show_id;
				});
			}),
		);*/
	}

	public addReview(show_id: number, comment: string, rating: number): void {
		const currentReviews = this.reviews$.getValue();

		/*const latestReviewIndex = currentReviews.length - 1;
    const latestReview = currentReviews[latestReviewIndex];
    const latestReviewId = latestReview.id;
    const newReviewId = latestReviewId + 1;*/
		currentReviews.push({
			id: currentReviews[currentReviews.length - 1].id + 1,
			show_id: show_id,
			comment: comment,
			rating: rating,
		});

		this.reviews$.next(currentReviews);

		//return this.reviews$.asObservable();
	}
}
