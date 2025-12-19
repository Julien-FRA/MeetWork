import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateRecruiterDto } from '../dto/recruiter.dto';
import * as bcrypt from 'bcrypt';
import { ConflictException } from 'src/common/exceptions/custom.exception';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecruiterRepository {
  private readonly logger = new Logger(RecruiterRepository.name);

  constructor(private readonly prismaService: PrismaService) {}

  async createRecruiter(createRecruiterDto: CreateRecruiterDto) {
    try {
      const hashedPassword = await bcrypt.hash(
        createRecruiterDto.password,
        12,
      );
      return await this.prismaService.recruiterUser.create({
        data: {
          enterprise: createRecruiterDto.enterprise,
          name: createRecruiterDto.name,
          email: createRecruiterDto.email,
          password: hashedPassword,
          phone: createRecruiterDto.phone,
        },
      });
    } catch (error) {
      this.logger.error(
        `Error creating recruiter: ${error.message}`,
        error.stack,
      );

      // Handle Prisma unique constraint violation
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email déjà utilisé');
      }

      // Handle bcrypt errors
      if (error.name === 'Error' && error.message.includes('bcrypt')) {
        throw new Error('Erreur lors du hachage du mot de passe');
      }

      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      return await this.prismaService.recruiterUser.findUnique({
        where: { email },
      });
    } catch (error) {
      this.logger.error(
        `Error finding recruiter by email: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  async findById(id: string) {
    try {
      return await this.prismaService.recruiterUser.findUnique({
        where: { id },
      });
    } catch (error) {
      this.logger.error(
        `Error finding recruiter by ID: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prismaService.recruiterUser.findMany();
    } catch (error) {
      this.logger.error(
        `Error finding all recruiters: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }
}
