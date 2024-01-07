import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { LoginModalService } from '@services/login-modal.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
	links = [
		{ link: "/", title: "Home" },
		{ link: "https://dartegnian.com", title: "Dartegnian.com" }
	];
	username = "";
	usernameSubscription: Subscription;

	constructor(
		private loginModalService: LoginModalService,
		private authService: AuthService
	) {
		this.usernameSubscription = this.authService.usernameSubscription.subscribe(
			(username) => {
				this.username = username;
			}
		);
	}

	showModal() {
		this.loginModalService.setLoginModalShow(true);
	}
}
