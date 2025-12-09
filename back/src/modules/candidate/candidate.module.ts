import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CandidateController } from './controller/candidate.controller';
import { CandidateService } from './services/candidate.service';
import { CandidateRepository } from './repository/candidate.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CandidateController],
  providers: [CandidateService, CandidateRepository],
  exports: [CandidateService],
})
export class CandidateModule {}
