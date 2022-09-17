import {GenerateUserResultUseCase} from "../../GenerateUserResultUseCase";
import {GenerateUserResultCommand, GenerateUserResultResponse} from "../../GenerateUserResultCommand";
import {ExamGateway} from "../../../../exams/gateway/ExamRepository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class GenerateUserResultUseCaseImpl implements GenerateUserResultUseCase {
    examGateway: ExamGateway

    constructor(examGateway: ExamGateway) {
        this.examGateway = examGateway;
    }

    execute(command: GenerateUserResultCommand): GenerateUserResultResponse {
        const exam = this.examGateway.findById(command.examId);
        if (exam === null) {
            throw new Error("Exam not found");
        }
        let score = 0;
        exam.questions.filter(question => command.responses.filter(response => response.questionNumber == question.questionNumer)).forEach(() => {
            score++;
        })
        return new GenerateUserResultResponse(command.examId, command.candidateName, command.candidateEmail, score, score / exam.questions.length, score / exam.questions.length * 100);
    }


}