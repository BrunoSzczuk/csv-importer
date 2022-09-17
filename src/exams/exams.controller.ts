import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ExamsService} from './exams.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {csvFileFilter, csvFileName} from './CsvHelper';
import {CsvParser} from 'nest-csv-parser';
import * as fs from 'fs';
import {Answer, ImportExamCommand, UserResponse, UserSummary} from 'src/core/usecase/exams/ImportExamCommands';
import {parse} from 'papaparse'

class Entity {
    examid: string;
    examdate: Date;
    candidateemail: string;
    candidatename: string;
    questionnumber: number;
    answer: Answer
}

@Controller('exams')
export class ExamsController {
    constructor(private readonly examsService: ExamsService, private readonly csvParser: CsvParser) {
    }


    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/csv',
            filename: csvFileName,
        }),
        fileFilter: csvFileFilter,
    }))
    async create(@UploadedFile() file: Express.Multer.File) {
        const csvFile = fs.readFileSync(__dirname + '/../../' + file.path, 'utf8');
        const csvData = csvFile.toString();
        const parsedCsv = parse(csvData, {
                header: true,
                skipEmptyLines: true,
                transformHeader: (header) => header.toLowerCase().replace(/\s/g, ''),
                complete(results, _file) {
                    results.data
                },
            }
        );

        const distinctUsersEmails: String[] = (parsedCsv.data as Entity[]).reduce((acc, curr) => {
                if (!acc.includes(curr.candidateemail)) {
                    acc.push(curr.candidateemail);
                }
                return acc;
            }
            , []);

        const usersSummary = distinctUsersEmails.map(email => {
            const userResponses = (parsedCsv.data as Entity[]).filter(entity => entity.candidateemail === email);
            return new UserSummary(userResponses[0].examid, userResponses[0].examdate, userResponses[0].candidateemail, userResponses[0].candidatename, userResponses.map(entity => {
                return new UserResponse(entity.questionnumber, entity.answer);
            }))
        });

        console.log(usersSummary)
        return this.examsService.create(new ImportExamCommand(usersSummary));
    }


}

