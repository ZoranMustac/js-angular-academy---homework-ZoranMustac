import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UploadModule } from '../upload/upload.module';

@NgModule({
	declarations: [ProfileComponent],
	imports: [CommonModule, UploadModule],
})
export class ProfileModule {}
