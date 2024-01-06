import { Injectable } from '@angular/core';
import IQuizQuestion from '@interfaces/quiz-question.interface';

@Injectable({
	providedIn: 'root'
})
export class QuizQuestionsService {
	quizQuestions: Array<IQuizQuestion>;
	currentResults: Array<IQuizQuestion>;
	totalScore = 0;

	constructor() {
		this.quizQuestions = this.fetchQuizQuestions();
		this.currentResults = [];
	}

	fetchQuizQuestions(): Array<IQuizQuestion> {
		let quizQuestions: Array<IQuizQuestion> = [
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
				],
				isCorrect: false
			},
			{
				type: "multiple-choice",
				question: "She hasn't come home ........",
				answer: "yet",
				pointGrade: 1,
				choices: [
					"still",
					"already",
					"yet",
					"till"
				],
				isCorrect: false
			}
		];

		quizQuestions = this.shuffleQuizQuestions(quizQuestions);

		return quizQuestions;
	}

	shuffleQuizQuestions(questions: Array<IQuizQuestion>): Array<IQuizQuestion> {
		let arrayLength = questions.length;

		while (arrayLength) {
			let randomIndex = Math.floor(Math.random() * arrayLength--);

			let temporaryElement = questions[arrayLength];
			questions[arrayLength] = questions[randomIndex];
			questions[randomIndex] = temporaryElement;
		}

		return questions;
		
	}

	setCurrentResults(results: Array<IQuizQuestion>): void {
		this.currentResults = results;
	}

	setTotalScore(score: number): void {
		this.totalScore = score;
	}

	getTotalScore(): number {
		return this.totalScore;
	}
}
