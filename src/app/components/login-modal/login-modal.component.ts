import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-login-modal',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './login-modal.component.html',
	styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.authService.login(this.loginForm.value);
		}
	}
}
