/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';

export type CreateCandidateDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string | null;
};
export class CandidateResponseDto {
  @ApiProperty({ description: 'ID du candidat', example: '1' })
  id: string;

  @ApiProperty({ description: 'Prénom du candidat', example: 'John' })
  firstName: string;

  @ApiProperty({ description: 'Nom du candidat', example: 'Doe' })
  lastName: string;

  @ApiProperty({
    description: 'Email du candidat',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Téléphone du candidat',
    example: '+33612345678',
    required: false,
  })
  phone?: string | null;

  @ApiProperty({
    description: 'Date de création',
    example: '2025-11-09T20:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date de mise à jour',
    example: '2025-11-09T20:00:00.000Z',
  })
  updatedAt: Date;

  constructor(candidate: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = candidate.id;
    this.firstName = candidate.firstName;
    this.lastName = candidate.lastName;
    this.email = candidate.email;
    this.phone = candidate.phone;
    this.createdAt = candidate.createdAt;
    this.updatedAt = candidate.updatedAt;
  }
}
