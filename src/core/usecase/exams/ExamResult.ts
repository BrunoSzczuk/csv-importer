class ExamResult {
    examResultDto: ExamResultDto;
    violations: Array<string>;

    constructor(examResultDto: ExamResultDto, violations: Array<string>) {
        this.examResultDto = examResultDto;
        this.violations = violations;
    }

    static of(examResultDto: ExamResultDto, violations: Array<string>) {
        return new ExamResult(examResultDto, violations);
    }
}