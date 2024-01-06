import { Component } from '@angular/core';
import { LoginModalService } from '@services/login-modal.service';

@Component({
	selector: 'app-hero-banner',
	standalone: true,
	imports: [],
	templateUrl: './hero-banner.component.html',
	styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
	taglineText = "See Your Students' Potential,";
	highlightedText = "Through Exams.";
	ctaText = "Embark on a transformative learning experience with our user-friendly exam platform. Unlock your students' potential and pave the way for academic success.";

	constructor(
		private loginModalService: LoginModalService
	) {}

	showModal() {
		this.loginModalService.setLoginModalShow(true);
	}
}
