import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [FileInputComponent],
	exports: [FileInputComponent],
	imports: [CommonModule, ReactiveFormsModule],
})
export class FileInputModule {}
