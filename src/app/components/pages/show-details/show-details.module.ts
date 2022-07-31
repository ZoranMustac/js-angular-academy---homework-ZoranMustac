import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { ShowsListModule } from '../../shows-list/shows-list.module';
import { MatCardModule } from '@angular/material/card';
import { ShowReviewsModule } from '../../show-reviews/show-reviews.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ShowDetailsComponent],
	exports: [ShowDetailsComponent],
	imports: [CommonModule, ShowsListModule, MatCardModule, ShowReviewsModule, MatIconModule],
})
export class ShowDetailsModule {}
