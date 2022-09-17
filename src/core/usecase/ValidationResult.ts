class ValidationResult {
    valid: boolean;
    violations: Array<string>;

    private constructor(valid: boolean, violations: Array<string>) {
        this.valid = valid;
        this.violations = violations;
    }

    static of(violations: Array<string>) {
        return new ValidationResult(violations.length === 0, violations);
    }
}