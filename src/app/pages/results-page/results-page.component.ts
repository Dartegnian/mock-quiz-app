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
	percentage = 0;
	ranking: "low" | "average" | "high" = "low";

	constructor(
		private quizQuestionsService: QuizQuestionsService
	) {}

	ngOnInit(): void {
		this.totalScore = this.quizQuestionsService.getTotalScore();
		this.computeFromScore();
	}

	computeFromScore(): void {
		const percentage = (this.totalScore / 10) * 100;
		this.percentage = percentage;

		if  (percentage >= 90) {
			this.ranking = "high";
		} else if (percentage <= 89 && percentage >= 75) {
			this.ranking = "average"
		} else {
			this.ranking = "low";
		}
	}
}
