import {Exam} from "../entities/exam.entity";

export interface ExamGateway {
    save(exam: Exam): Promise<Exam>;

    findById(examId: String): Exam
}