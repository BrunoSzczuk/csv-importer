import {ExamSuccessfullyImportedRule} from "./ExamSuccessfullyImportedRule";
import {ImportExamCommand} from "./ImportExamCommands";

export class ValidExamIdValidationRule implements ExamSuccessfullyImportedRule {
    validate(modification: ImportExamCommand, currentState: ImportExamCommand): ValidationResult {
        throw new Error("Method not implemented.");
    }

    breakWithError() {
        return true
    }

    order(): number {
        return Number.MAX_VALUE
    }

}