import { Injectable } from '@angular/core';
import IQuizQuestion from '@interfaces/quiz-question.interface';

@Injectable({
	providedIn: 'root'
})
export class QuizQuestionsService {
	quizQuestions: Array<IQuizQuestion>;

	constructor() {
		this.quizQuestions = this.fetchQuizQuestions();
	}

	fetchQuizQuestions(): Array<IQuizQuestion> {
		return [
			{
				type: "multiple-choice",
				question: "Can you hear what he is .......?",
				answer: "saying",
				pointGrade: 1,
				choices: [
					"saying",
					"speaking",
					"telling",
					"talking"
				]
			}
		];
	}
}
