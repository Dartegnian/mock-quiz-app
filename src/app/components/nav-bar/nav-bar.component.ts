import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}
