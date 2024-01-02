import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IQuizQuestion from '@interfaces/quiz-question.interface';

@Component({
	selector: 'app-question-block',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './question-block.component.html',
	styleUrl: './question-block.component.scss'
})
export class QuestionBlockComponent implements OnInit {
	@Input() question: IQuizQuestion = {
		type: "multiple-choice",
		question: "",
		answer: "",
		pointGrade: 0,
		choices: [
			""
		],
		isCorrect: false
	};
	@Input() index = 0;
	@Output() updatePointsEvent = new EventEmitter<{ isCorrect: boolean; index: number }>;

	shuffledChoices: Array<string> = [];

	constructor() {
	}

	ngOnInit(): void {
		this.shuffledChoices = this.shuffleChoices(this.question.choices);
	}


	shuffleChoices(array: any[]): any[] {
		let arrayLength = array.length;

		while (arrayLength) {
			let randomIndex = Math.floor(Math.random() * arrayLength--);

			let temporaryElement = array[arrayLength];
			array[arrayLength] = array[randomIndex];
			array[randomIndex] = temporaryElement;
		}

		return array;
	}

	evaluateChoiceSelect(choice: string): void {
		switch (this.question.type) {
			case "multiple-choice":
				if (choice.toLowerCase() === this.question.answer.toString().toLocaleLowerCase()) {
					this.updatePointsEvent.emit({
						isCorrect: true,
						index: this.index
					})
				} else {
					this.updatePointsEvent.emit({
						isCorrect: false,
						index: this.index
					})
				}
				break;

			default:
				throw Error("Wrong type");
		}
	}
}
