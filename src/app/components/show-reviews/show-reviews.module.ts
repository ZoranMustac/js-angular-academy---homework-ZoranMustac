import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowReviewsComponent } from './show-reviews.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ShowReviewsComponent],
	imports: [CommonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule],
	exports: [ShowReviewsComponent],
})
export class ShowReviewsModule {}
