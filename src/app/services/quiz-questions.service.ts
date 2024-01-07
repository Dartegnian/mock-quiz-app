import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IQuizQuestion from '@interfaces/quiz-question.interface';
import { SITE_CONFIG } from '@utils/config';
import { AuthService } from './auth.service';
import { map, catchError, of, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class QuizQuestionsService {
	quizQuestions: Array<IQuizQuestion>;
	currentResults: Array<IQuizQuestion>;
	totalScore = 0;

	constructor(
		private http: HttpClient,
		private authService: AuthService
	) {
		this.quizQuestions = [];
		this.currentResults = [];
	}

	fetchQuizQuestions(): Observable<boolean> {
		const sessionToken = this.authService.getSessionToken();

		if (sessionToken) {
			const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionToken}`);
			// const headers = new HttpHeaders({
			// 	'Content-Type': 'application/json',
			// 	'QUIZ-AUTH': sessionToken
			// });

			// const options = {
			// 	headers,
			// 	withCredentials: true
			// };

			return this.http.get<Array<IQuizQuestion>>(`${SITE_CONFIG.API_URL}/questions`, { headers })
				.pipe(
					map((quizQuestions) => {
						console.log("Questions fetched!", quizQuestions);
						this.quizQuestions = this.shuffleQuizQuestions(quizQuestions);
						return true;
					}),
					catchError((error) => {
						console.error(error);
						return of(false);
					})
				);
		} else {
			console.error("User is not authenticated");
			return of(false);
		}
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

	getQuizQuestions(): Array<IQuizQuestion> {
		return this.quizQuestions;
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
