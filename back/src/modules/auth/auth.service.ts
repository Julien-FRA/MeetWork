import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CandidateService } from '../candidate/services/candidate.service';
import { RecruiterService } from '../recruiter/services/recruiter.service';
import { JwtService } from '@nestjs/jwt';
import {
  CandidateResponseDto,
  CreateCandidateDto,
} from '../candidate/dto/candidate.dto';
import { RecruiterResponseDto } from '../recruiter/dto/recruiter.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly recruiterService: RecruiterService,
    private readonly jwtService: JwtService,
  ) {}

  async signupCandidate(createCandidateDto: CreateCandidateDto) {
    const existingCandidate = await this.candidateService.findByEmail(
      createCandidateDto.email,
    );
    if (existingCandidate) {
      throw new UnauthorizedException('Email déjà utilisé');
    }

    const candidate =
      await this.candidateService.createCandidate(createCandidateDto);
    return this.generateToken(candidate);
  }

  async loginCandidate(loginCandidateDto: LoginCandidateDto) {
    const candidate = await this.candidateService.findByEmail(
      loginCandidateDto.email,
    );
    if (
      !candidate ||
      !(await bcrypt.compare(loginCandidateDto.password, candidate.password))
    ) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }
    return this.generateToken(candidate);
  }

  private generateToken(user: CandidateResponseDto | RecruiterResponseDto) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user instanceof CandidateResponseDto ? 'candidate' : 'recruiter',
    };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
