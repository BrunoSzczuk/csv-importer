class ExamResultDto {
    examId: String;
    averageScore: Number;
    candidateEmail: String;
    candidateName: String;
    score: Number;
    percentRank: Number;

    constructor(examId: String, averageScore: Number, candidateEmail: String, candidateName: String, score: Number, percentRank: Number) {
        this.examId = examId;
        this.averageScore = averageScore;
        this.candidateEmail = candidateEmail;
        this.candidateName = candidateName;
        this.score = score;
        this.percentRank = percentRank;
    }

}