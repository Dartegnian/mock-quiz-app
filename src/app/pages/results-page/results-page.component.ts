import { Component, OnInit } from '@angular/core';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Component({
	selector: 'app-results-page',
	standalone: true,
	imports: [],
	templateUrl: './results-page.component.html',
	styleUrl: './results-page.component.scss',
})
export class ResultsPageComponent implements OnInit {
	totalScore = 0;

	constructor(
		private quizQuestionsService: QuizQuestionsService
	) {}

	ngOnInit(): void {
		this.totalScore = this.quizQuestionsService.getTotalScore();
	}
}
