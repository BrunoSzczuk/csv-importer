export class Exam {
    id: string;
    questions: Array<Question>;
}

export class Question {
    questionNumer: number
    answer: Answer
}

export enum Answer {
    A, B, C, D
}