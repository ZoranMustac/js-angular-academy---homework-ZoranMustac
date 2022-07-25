import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ShowCardComponent],
	exports: [ShowCardComponent],
	imports: [CommonModule, MatCardModule, RouterModule],
})
export class ShowCardModule {}
