import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Custom exception class for business logic errors
 * Allows throwing exceptions with custom messages and HTTP status codes
 */
export class CustomException extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}

/**
 * Specific exception for resource not found errors
 */
export class NotFoundException extends CustomException {
  constructor(resource: string, id?: string) {
    const message = id
      ? `${resource} avec l'ID ${id} introuvable`
      : `${resource} introuvable`;
    super(message, HttpStatus.NOT_FOUND);
  }
}

/**
 * Specific exception for conflict errors (e.g., duplicate email)
 */
export class ConflictException extends CustomException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}

/**
 * Specific exception for bad request errors (e.g., invalid input)
 */
export class BadRequestException extends CustomException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

/**
 * Specific exception for unauthorized errors
 */
export class UnauthorizedException extends CustomException {
  constructor(message: string = 'Non autorisé') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
