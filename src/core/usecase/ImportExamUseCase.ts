import {ImportExamCommand} from "./exams/ImportExamCommands";
import {ResultCommandUseCase} from "./ResultCommandUseCase";

export interface ImportExamUseCase extends ResultCommandUseCase<ImportExamCommand, ExamResult> {

}