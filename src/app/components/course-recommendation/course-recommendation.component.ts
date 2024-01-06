import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-course-recommendation',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './course-recommendation.component.html',
	styleUrl: './course-recommendation.component.scss'
})
export class CourseRecommendationComponent implements OnInit {
	@Input() ranking: "low" | "average" | "high" = "low";
	recommendations = {
		b2First: {
			image: "/assets/img/courses/B2_First_-_MockUp.webp",
			inclusionHeader: "Test&Train Self-Study B2 First gives you",
			inclusions: [
				"6 x full Reading & Use of English exams",
				"6 x full Listening exams",
				"6 x full Writing exams with sample answers and examiner notes",
				"1 x complete Speaking test video with hints and comments"
			],
			benefitsHeader: "Prepare for your exam day with Cambridge quality you can trust",
			benefits: [
				"Dip in and out of 500+ practice questions that cover all parts of the exam",
				"Instant feedback for Reading & Use of English and Listening questions",
				"Hints and tips from Cambridge experts",
				"Try questions unlimited times at your own pace, until you feel confident"
			]
		}
	};

	constructor() {}

	ngOnInit(): void {
		
	}
}
