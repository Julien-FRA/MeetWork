export type CreateCandidateDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string | null;
};
