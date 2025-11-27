import { z } from "zod";

export const loginCandidateSchema = z.object({
  email: z
    .string()
    .email("Veuillez entrer une adresse e-mail valide.")
    .min(5, "L'adresse e-mail est trop courte.")
    .max(100, "L'adresse e-mail est trop longue."),

  password: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères.")
    .max(100, "Le mot de passe est trop long."),
});

export const loginRecruiterSchema = z.object({
  email: z
    .string()
    .email("Veuillez entrer une adresse e-mail valide.")
    .min(5, "L'adresse e-mail est trop courte.")
    .max(100, "L'adresse e-mail est trop longue."),

  password: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères.")
    .max(100, "Le mot de passe est trop long."),
});