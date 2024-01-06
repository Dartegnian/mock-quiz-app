import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginModalService {
	isLoginModalShown = true;
	showModalSubscription: Subject<boolean>;

	constructor() {
		this.showModalSubscription = new Subject();
	}

	setLoginModalShow(show: boolean): void {
		this.isLoginModalShown = show;
		this.showModalSubscription.next(show);
		console.warn(show);
	}
}
