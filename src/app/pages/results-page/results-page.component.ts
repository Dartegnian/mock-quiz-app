import { Component, OnInit } from '@angular/core';
import { CourseRecommendationComponent } from '@components/course-recommendation/course-recommendation.component';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Component({
	selector: 'app-results-page',
	standalone: true,
	imports: [CourseRecommendationComponent],
	templateUrl: './results-page.component.html',
	styleUrl: './results-page.component.scss',
})
export class ResultsPageComponent implements OnInit {
	totalScore = 0;
	percentage = 0;
	ranking: "low" | "average" | "high" = "low";
	resultsGreeting = {
		"low": "Don't be discouraged—every challenge is a learning opportunity. This result highlights areas to focus on, and we're here to guide you. Let's create a personalized study plan that works for you!",
		"average": "You're halfway to the summit! Keep up the great work, and don't hesitate to reach out for support if you need it. We're here to provide the tools and guidance to help you excel.",
		"high": "Incredible! You've demonstrated a mastery of the material. We're so proud of your dedication and success. Keep aiming high, and don't forget to celebrate this victory!",
	}

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
