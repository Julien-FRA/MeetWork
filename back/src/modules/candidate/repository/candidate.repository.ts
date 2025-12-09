import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateCandidateDto } from '../dto/candidate.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CandidateRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCandidate(createCandidateDto: CreateCandidateDto) {
    const hashedPassword = await bcrypt.hash(createCandidateDto.password, 12);
    return this.prisma.candidateUser.create({
      data: {
        firstName: createCandidateDto.firstName,
        lastName: createCandidateDto.lastName,
        email: createCandidateDto.email,
        password: hashedPassword,
        phone: createCandidateDto.phone,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.candidateUser.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    return this.prisma.candidateUser.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return this.prisma.candidateUser.findMany();
  }
}
