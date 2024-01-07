import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Injectable({
	providedIn: 'root'
})
export class QuizGuard {
	constructor(
		private router: Router,
		private quizQuestionsService: QuizQuestionsService
	) { }

	canActivate() {
		if (this.quizQuestionsService.quizQuestions.length !== 0) {
			return true;
		} else {
			this.router.navigate(['/']);
			return false;
		}
	}
}
