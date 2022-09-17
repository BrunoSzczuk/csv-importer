import {Injectable} from "@nestjs/common";
import {ExamSuccessfullyImportedRule} from "../../exams/ExamSuccessfullyImportedRule";
import {ImportExamCommand} from "../../exams/ImportExamCommands";

@Injectable()
export class ExamSuccessfullyImportedRuleImpl implements ExamSuccessfullyImportedRule {
    validate(modification: ImportExamCommand, currentState: ImportExamCommand): ValidationResult {
        return null;

    }

    breakWithError(): boolean {
        return false
    }

    order(): number {
        return Number.MAX_VALUE
    }

}