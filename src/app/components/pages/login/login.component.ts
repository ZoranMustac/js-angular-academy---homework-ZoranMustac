import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { IAuthFormData } from 'src/show/auth-form-data.interface';

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

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	public onLoginClick(event: Event) {
		event.preventDefault();
		this.authService
			.login({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as IAuthFormData)
			.subscribe(() => {
				this.router.navigate(['']);
			});
	}
}
