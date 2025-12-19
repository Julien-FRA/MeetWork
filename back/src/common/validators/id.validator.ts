import { BadRequestException } from '../exceptions/custom.exception';

/**
 * Validates UUID format
 * @param id - The ID to validate
 * @param resourceName - The name of the resource for error messages
 * @throws BadRequestException if the ID is not a valid UUID
 */
export function validateUUID(id: string, resourceName: string = 'ID'): void {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!id || !uuidRegex.test(id)) {
    throw new BadRequestException(
      `${resourceName} invalide. Format UUID attendu.`,
    );
  }
}

/**
 * Validates email format
 * @param email - The email to validate
 * @throws BadRequestException if the email is not valid
 */
export function validateEmail(email: string): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    throw new BadRequestException('Adresse email invalide');
  }
}
