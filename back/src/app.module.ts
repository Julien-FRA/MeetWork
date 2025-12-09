import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CandidateModule } from './modules/candidate/candidate.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule, CandidateModule], // TODO erreur lors du build
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
