import {Module} from '@nestjs/common';
import {ExamsService} from './exams.service';
import {ExamsController} from './exams.controller';
import {CsvModule} from 'nest-csv-parser';
import {MulterModule} from '@nestjs/platform-express';
import {ExamsUseCaseModule} from 'src/core/usecase/exams/ExamsUseCaseModule';

@Module({
    imports: [CsvModule,
        MulterModule.register({
            dest: './uploads/csv',
        }),

        ExamsUseCaseModule],
    controllers: [ExamsController],
    providers: [ExamsService]
})
export class ExamsModule {
}
