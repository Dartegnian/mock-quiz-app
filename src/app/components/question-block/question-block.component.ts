import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import IQuizQuestion from '@interfaces/quiz-question.interface';

@Component({
	selector: 'app-question-block',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './question-block.component.html',
	styleUrl: './question-block.component.scss'
})
export class QuestionBlockComponent {
	@Input() question: IQuizQuestion = {
		type: "multiple-choice",
		question: "",
		answer: "",
		pointGrade: 0,
		choices: [
			""
		]
	};
}
