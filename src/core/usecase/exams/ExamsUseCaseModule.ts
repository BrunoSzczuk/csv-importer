import {Module} from "@nestjs/common";
import {ExamSuccessfullyImportedRuleImpl} from "../rules/impl/ExamSuccessfullyImportedRuleImpl";
import {ValidationRuleExecutor} from "../rules/ValidationRuleExecutor";
import {ImportExamUseCaseImpl} from "./impl/ImportExamUseCaseImpl";

@Module({
    exports: [{provide: "ImportExamUseCase", useClass: ImportExamUseCaseImpl}],
    providers: [{provide: "ImportExamUseCase", useClass: ImportExamUseCaseImpl}, ValidationRuleExecutor, {
        provide: "ExamSuccessfullyImportedRule",
        useClass: ExamSuccessfullyImportedRuleImpl
    }]
})
export class ExamsUseCaseModule {
}
