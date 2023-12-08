import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';

@Component({
	selector: 'app-upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
	private file?: File;
	private reader = new FileReader();

	constructor(private readonly fileUploadService: FileUploadService) {}

	public onFileChange(file: File | null): void {
		this.file = file || undefined;
	}

	public onUploadButtonClick(): void {
		if (this.file) {
			this.fileUploadService.upload(this.file).subscribe();
			this.reader.readAsDataURL(this.file);
			alert('Upload Sucessful');
		}
	}
}
