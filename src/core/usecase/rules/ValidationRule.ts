interface ValidationRule<T = any> {
    validate(modification: T, currentState: T): ValidationResult;

    breakWithError(): boolean

    order(): number
}
