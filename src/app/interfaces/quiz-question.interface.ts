export default interface IQuizQuestion {
	type: "multiple-choice" | "fill-in-the-blanks" | "essay";
	question: string;
	answer: string | number | Array<string>;
	pointGrade: number;
	choices: Array<string> | Array<number>;
}
