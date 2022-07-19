import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	public onLoginClick(event: Event) {
		event.preventDefault();
		console.log(this.form.controls.email.value);
		console.log(this.form.controls.password.value);
	}
}
