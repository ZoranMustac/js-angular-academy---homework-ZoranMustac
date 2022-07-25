import { TestBed } from '@angular/core/testing';

import { ShowReviewsService } from './show-reviews.service';

describe('ShowReviewsService', () => {
	let service: ShowReviewsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ShowReviewsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
