import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginModalService } from '@services/login-modal.service';

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

	constructor(
		private loginModalService: LoginModalService
	) {}

	showModal() {
		this.loginModalService.setLoginModalShow(true);
	}
}
