import {Inject, Injectable} from '@nestjs/common';
import {ImportExamCommand} from 'src/core/usecase/exams/ImportExamCommands';
import {ImportExamUseCase} from 'src/core/usecase/ImportExamUseCase';
import {UpdateExamDto} from './dto/update-exam.dto';

@Injectable()
export class ExamsService {
    constructor(@Inject("ImportExamUseCase") private importExamUseCase: ImportExamUseCase) {
        this.importExamUseCase = importExamUseCase;
    }

    create(importExam: ImportExamCommand) {
        return this.importExamUseCase.execute(importExam);
    }

    findAll() {
        return `This action returns all exams`;
    }

    findOne(id: number) {
        return `This action returns a #${id} exam`;
    }

    update(id: number, updateExamDto: UpdateExamDto) {
        return `This action updates a #${id} exam`;
    }

    remove(id: number) {
        return `This action removes a #${id} exam`;
    }
}
