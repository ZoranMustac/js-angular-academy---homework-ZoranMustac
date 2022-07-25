import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ShowReviewsService } from 'src/app/services/show-reviews-service/show-reviews.service';
import { IShowReview } from 'src/show/show-reviews.interface';
import { Show } from 'src/show/show.model';

@Component({
	selector: 'app-show-reviews',
	templateUrl: './show-reviews.component.html',
	styleUrls: ['./show-reviews.component.scss'],
})
export class ShowReviewsComponent implements OnInit {
	@Input() show!: Show;
	public showReviews$!: Observable<Array<IShowReview>>;
	public reviewFormGroup = new FormGroup({
		comment: new FormControl('', Validators.required),
		rating: new FormControl('', Validators.required),
	});

	constructor(private readonly showReviewsService: ShowReviewsService) {}

	ngOnInit(): void {
		this.showReviews$ = this.getReviews();
	}

	private getReviews(): Observable<Array<IShowReview>> {
		return this.showReviewsService.getReviews(this.show.id);
	}

	public addReview() {
		this.showReviewsService.addReview(
			this.show.id,
			this.reviewFormGroup.value.comment || '',
			parseFloat(this.reviewFormGroup.value.rating || ''),
		);
	}
}
