import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { LoginModalService } from '@services/login-modal.service';
import { Router } from '@angular/router';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Component({
	selector: 'app-login-modal',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './login-modal.component.html',
	styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
	loginForm: FormGroup;
	isSuccessfulLogin: boolean | undefined;
	isLoggingIn = false;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private loginModalService: LoginModalService,
		private router: Router,
		private quizQuestionsService: QuizQuestionsService
	) {
		this.loginForm = this.formBuilder.group({
			email: ['test@dartegnian.com', [Validators.required, Validators.email]],
			password: ['BingoBongo1!', Validators.required]
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.isLoggingIn = true;
			this.authService.login(this.loginForm.value).subscribe(
				(isSuccessfulLogin) => {
					this.isSuccessfulLogin = isSuccessfulLogin;

					if (isSuccessfulLogin) {
						this.quizQuestionsService.fetchQuizQuestions().subscribe(
							(isSuccessfulQuestionsFetch) => {
								if (isSuccessfulQuestionsFetch) {
									this.loginModalService.setLoginModalShow(false);
									this.router.navigate(['/quiz']);
								} else {
									this.isLoggingIn = false;
								}
							}
						);
					} else {
						this.isLoggingIn = false;
					}
				}
			);
		} else {
			this.isLoggingIn = false;
		}
	}

	closeModal() {
		this.loginModalService.setLoginModalShow(false);
	}
}
