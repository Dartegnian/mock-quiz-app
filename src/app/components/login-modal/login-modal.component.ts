import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { LoginModalService } from '@services/login-modal.service';

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
		private authService: AuthService,
		private loginModalService: LoginModalService
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

	closeModal() {
		this.loginModalService.setLoginModalShow(false);
	}
}
