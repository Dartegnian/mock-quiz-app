import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionBlockComponent } from '@components/question-block/question-block.component';
import IQuizQuestion from '@interfaces/quiz-question.interface';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Component({
	selector: 'app-quiz-page',
	standalone: true,
	imports: [QuestionBlockComponent, CommonModule],
	templateUrl: './quiz-page.component.html',
	styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent implements OnInit {
	quizQuestions: Array<IQuizQuestion> = [];
	answeredQuestions: Array<boolean> = [];
	totalScore = 0;

	constructor(
		private quizQuestionsService: QuizQuestionsService
	) {
	}

	ngOnInit(): void {
		this.quizQuestions = this.quizQuestionsService.fetchQuizQuestions();
	}
	
	updatePoints(pointsInfo: { isCorrect: boolean; index: number }): void {
		const { isCorrect, index } = pointsInfo;
		if (isCorrect) {
			this.quizQuestions[index].isCorrect = true;
		} else {
			this.quizQuestions[index].isCorrect = false;
		}

		this.answeredQuestions[index] = true;
		this.tallyScore();
	}

	tallyScore(): void {
		let computedScore = 0;

		this.quizQuestions.forEach(
			(question) => {
				if (question.isCorrect === true) {
					computedScore += question.pointGrade;
					console.warn("CORRECT", question);
				}
			}
		);

		this.totalScore = computedScore;
	}

	submitScores(): void {
		this.quizQuestionsService.setCurrentResults(this.quizQuestions);
	}
}
