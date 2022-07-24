import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IShowReview } from 'src/show/show-reviews.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowReviewsService {
	private reviews$: BehaviorSubject<Array<IShowReview>>;

	constructor() {
		this.reviews$ = new BehaviorSubject<Array<IShowReview>>([]);
	}

	public getReviews(show_id: number): Observable<Array<IShowReview>> {
		return this.reviews$.pipe(
			map((reviews) => {
				return reviews.filter((review) => {
					return review.show_id === show_id;
				});
			}),
		);
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
