import {Command} from "../Command";


export class ImportExamCommand implements Command {
    usersSummary: Array<UserSummary>;

    constructor(usersSummary: Array<UserSummary>) {
        this.usersSummary = usersSummary;
    }
}

export class UserSummary {
    examId: string;
    examDate: Date;
    candidateEmail: string;
    candidateName: string;
    responses: Array<UserResponse>

    constructor(examId: string, examDate: Date, candidateEmail: string, candidateName: string, responses: Array<UserResponse>) {
        this.examId = examId;
        this.examDate = examDate;
        this.candidateEmail = candidateEmail;
        this.candidateName = candidateName;
        this.responses = responses;
    }
}

export class UserResponse {

    questionNumber: number;
    answer: String;

    constructor(questionNumber: number, answer: String) {
        this.questionNumber = questionNumber;
        this.answer = answer;
    }

}