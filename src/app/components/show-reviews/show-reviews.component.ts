import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ShowReviewsService } from 'src/app/services/show-reviews-service/show-reviews.service';
import { IShowReview } from 'src/show/show-reviews.interface';
import { Show } from 'src/show/show.model';
import { IUser } from 'src/show/user.interface';

@Component({
	selector: 'app-show-reviews',
	templateUrl: './show-reviews.component.html',
	styleUrls: ['./show-reviews.component.scss'],
})
export class ShowReviewsComponent implements OnInit {
	@Input() show!: Show;
	public showReviews$!: Observable<Array<IShowReview>>;
	public showUser$!: Observable<Array<IUser>>;
	public form = this.showReviewsService.add();

	constructor(private readonly showReviewsService: ShowReviewsService) {}

	ngOnInit(): void {
		this.showReviews$ = this.getReviews();
	}

	private getReviews(): Observable<Array<IShowReview>> {
		return this.showReviewsService.getReviews(this.show.id);
	}

	public addReview() {
		this.showReviewsService
			.addReview(this.show.id, this.form.controls['comment'].value, this.form.controls['rating'].value)
			.subscribe(() => {
				this.form.reset();
				this.showReviews$ = this.getReviews();
			});
	}
}
