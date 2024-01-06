import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { LoginModalService } from '@services/login-modal.service';
import { LoginModalComponent } from '@components/login-modal/login-modal.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavBarComponent, LoginModalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'mock-quiz-app';
	showModalSubscription: Subscription;
	isLoginModalShown = false;

	constructor(
		private loginModalService: LoginModalService
	) {
		this.isLoginModalShown = this.loginModalService.isLoginModalShown;
		this.showModalSubscription = this.loginModalService.showModalSubscription.subscribe(
			(isShown) => this.isLoginModalShown = isShown
		);
	}
}
