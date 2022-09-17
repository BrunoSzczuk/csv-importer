import {Injectable} from "@nestjs/common";

@Injectable()
export class ValidationRuleExecutor {
    public validate<T = any, R = ValidationRule<T>>(rules: Array<{ [P in keyof ValidationRule<T>] }>, modification: T, currentState: T): ValidationResult {
        let violations: Array<string> = [];
        for (let rule of rules) {
            let result = rule.validate(modification, currentState);
            violations = violations.concat(result.violations);
            if (!result.valid && rule.breakWithError()) {
                break;
            }
        }
        return ValidationResult.of(violations);
    }

}
