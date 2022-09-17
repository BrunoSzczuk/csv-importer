import { Module } from '@nestjs/common';
import { ExamsUseCaseModule } from './core/usecase/exams/ExamsUseCaseModule';
import { ExamsModule } from './exams/exams.module';

@Module({
  imports: [ExamsModule, ExamsUseCaseModule],
})
export class AppModule {}
