import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FileInputModule } from '../../file-input/file-input.module';

@NgModule({
	declarations: [UploadComponent],
	exports: [UploadComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, FileInputModule],
})
export class UploadModule {}
