import {Command} from "./Command";
import {UserResponse} from "./exams/ImportExamCommands";

export class GenerateUserResultCommand implements Command {
    examId: string;
    candidateName: string;
    candidateEmail: string;
    responses: Array<UserResponse>

    constructor(examId: string, candidateName: string, candidateEmail: string, responses: Array<UserResponse>) {
        this.examId = examId;
        this.candidateName = candidateName;
        this.candidateEmail = candidateEmail;
        this.responses = responses;
    }

}

export class GenerateUserResultResponse {
    examId: string;
    candidateName: string;
    candidateEmail: string;
    score: number;
    averageScore: number;
    percentRank: number;

    constructor(examId: string, candidateName: string, candidateEmail: string, score: number, averageScore: number, percentRank: number) {
        this.examId = examId;
        this.candidateName = candidateName;
        this.candidateEmail = candidateEmail;
        this.score = score;
        this.averageScore = averageScore;
        this.percentRank = percentRank;
    }


}