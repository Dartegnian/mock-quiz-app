import { Component, OnInit } from '@angular/core';
import { QuestionBlockComponent } from '@components/question-block/question-block.component';
import IQuizQuestion from '@interfaces/quiz-question.interface';
import { QuizQuestionsService } from '@services/quiz-questions.service';

@Component({
	selector: 'app-quiz-page',
	standalone: true,
	imports: [QuestionBlockComponent],
	templateUrl: './quiz-page.component.html',
	styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent implements OnInit {
	quizQuestions: Array<IQuizQuestion> = [];

	constructor(
		private quizQuestionsService: QuizQuestionsService
	) {
	}

	ngOnInit(): void {
		this.quizQuestions = this.quizQuestionsService.fetchQuizQuestions();
		console.warn(this.quizQuestions);
	}

}