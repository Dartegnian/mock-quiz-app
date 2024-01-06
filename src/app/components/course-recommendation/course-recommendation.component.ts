import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IRecommendations } from '@interfaces/product-recommendation.interface';

@Component({
	selector: 'app-course-recommendation',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './course-recommendation.component.html',
	styleUrl: './course-recommendation.component.scss'
})
export class CourseRecommendationComponent implements OnInit {
	@Input() ranking: "low" | "average" | "high" = "low";
	recommendations: IRecommendations;

	constructor() {
		this.recommendations = {
			b2First: {
				productName: "B2 First",
				productPrice: "€23",
				image: "/assets/img/courses/B2_First_-_MockUp.webp",
				inclusions: [
					"6 x full Reading & Use of English exams",
					"6 x full Listening exams",
					"6 x full Writing exams with sample answers and examiner notes",
					"1 x complete Speaking test video with hints and comments"
				],
				benefits: [
					"Dip in and out of 500+ practice questions that cover all parts of the exam",
					"Instant feedback for Reading & Use of English and Listening questions",
					"Hints and tips from Cambridge experts",
					"Try questions unlimited times at your own pace, until you feel confident"
				]
			},
			c1Advanced: {
				productName: "C1 Advanced",
				productPrice: "€23",
				image: "/assets/img/courses/C1_-_Tablet_and_Mobile.webp",
				inclusions: [
					"6 x full Reading & Use of English exams",
					"6 x full Listening exams",
					"6 x full Writing exams with sample answers and examiner notes",
					"1 x complete Speaking test video with hints and comments",
				],
				benefits: [
					"Dip in and out of 500+ practice questions that cover all parts of the exam",
					"Instant feedback for Reading & Use of English and Listening questions",
					"Hints and tips from Cambridge experts",
					"Try questions unlimited times at your own pace, until you feel confident",
				]
			},
			b2FirstForSchools: {
				productName: "B2 First for Schools",
				productPrice: "€23",
				image: "/assets/img/courses/B2_first_for_schools_-_MockUp.webp",
				inclusions: [
					"6 x full Reading & Use of English exams",
					"6 x full Listening exams",
					"6 x full Writing exams with sample answers and examiner notes",
					"1 x complete Speaking test video with hints and comments",
				],
				benefits: [
					"Dip in and out of 500+ practice questions that cover all parts of the exam",
					"Instant feedback for Reading & Use of English and Listening questions",
					"Hints and tips from Cambridge experts",
					"Try questions unlimited times at your own pace, until you feel confident",
				]
			},
			b1PreliminaryForSchools: {
				productName: "B1 Preliminary for Schools",
				productPrice: "€23",
				image: "/assets/img/courses/B1_Preliminary_for_schools_-_MockUp.webp",
				inclusions: [
					"6 x full Reading exams",
					"6 x full Listening exams",
					"6 x full Writing exams with sample answers and examiner notes",
					"1 x complete Speaking test video with hints and comments",
				],
				benefits: [
					"Dip in and out of 300+ practice questions that cover all parts of the exam",
					"Instant feedback for Reading and Listening questions",
					"Hints and tips from Cambridge experts",
					"Try questions unlimited times at your own pace, until you feel confident",
				]
			},
			a2KeyForSchools: {
				productName: "A2 Key for Schools",
				productPrice: "€23",
				image: "/assets/img/courses/A2_Key_for_schools_-_MockUp.webp",
				inclusions: [
					"6 x full Reading & Writing exams with sample answers and examiner notes",
					"6 x full Listening exams",
					"1 x complete Speaking test video with hints and comments",
				],
				benefits: [
					"Dip in and out of 300+ practice questions that cover all parts of the exam",
					"Instant feedback for Reading and Listening questions",
					"Hints and tips from Cambridge experts",
					"Try questions unlimited times at your own pace, until you feel confident",
				]
			},
		};
	}

	ngOnInit(): void {

	}
}
