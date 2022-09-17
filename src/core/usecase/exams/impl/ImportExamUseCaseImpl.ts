import {Inject, Injectable} from "@nestjs/common";
import {ImportExamUseCase} from "../../ImportExamUseCase";
import {ValidationRuleExecutor} from "../../rules/ValidationRuleExecutor";
import {ExamSuccessfullyImportedRule} from "../ExamSuccessfullyImportedRule";
import {ImportExamCommand} from "../ImportExamCommands";
import {ExamGateway} from "../../../../exams/gateway/ExamRepository";
import {GenerateUserResultUseCase} from "../../GenerateUserResultUseCase";
import {GenerateUserResultCommand, GenerateUserResultResponse} from "../../GenerateUserResultCommand";

@Injectable()
export class ImportExamUseCaseImpl implements ImportExamUseCase {
    rules: Array<ExamSuccessfullyImportedRule>
    executor: ValidationRuleExecutor
    examGateway: ExamGateway
    generateUserResultUseCase: GenerateUserResultUseCase

    constructor(@Inject("ExamSuccessfullyImportedRule") rules: ExamSuccessfullyImportedRule[], executor: ValidationRuleExecutor, examGateway: ExamGateway) {
        this.rules = rules;
        this.executor = executor;
        this.examGateway = examGateway;
    }

    execute(command: ImportExamCommand): ExamResult {
        command.usersSummary.forEach(user => {
            var result = this.generateUserResultUseCase.execute(new GenerateUserResultCommand(user.examId, user.candidateName, user.candidateEmail, user.responses));
        })
        return null;
    }

}