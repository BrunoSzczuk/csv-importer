import {Command} from "./Command";

export interface ResultCommandUseCase<T = Command, R = any> {
    execute(command: T): R;
}