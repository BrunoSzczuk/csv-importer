import {ResultCommandUseCase} from "./ResultCommandUseCase";
import {GenerateUserResultCommand, GenerateUserResultResponse} from "./GenerateUserResultCommand";

export interface GenerateUserResultUseCase extends ResultCommandUseCase<GenerateUserResultCommand, GenerateUserResultResponse> {

}
