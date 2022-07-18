import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { ShowsListModule } from '../../shows-list/shows-list.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowDetailsComponent],
	exports: [ShowDetailsComponent],
	imports: [CommonModule, ShowsListModule, MatCardModule],
})
export class ShowDetailsModule {}
