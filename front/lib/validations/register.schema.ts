import { z } from "zod";

export const registerCandidateSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "Le nom est requis.")
      .max(50, "Le nom ne peut dépasser 50 caractères."),

    lastName: z
      .string()
      .min(1, "Le prénom est requis.")
      .max(50, "Le prénom ne peut dépasser 50 caractères."),

    email: z
      .string()
      .email("Veuillez entrer une adresse e-mail valide.")
      .max(100, "L'adresse e-mail est trop longue."),

    password: z
      .string()
      .min(8, "Le mot de passe doit comporter au moins 8 caractères.")
      .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule.")
      .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule.")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre.")
      .regex(
        /[^A-Za-z0-9]/,
        "Le mot de passe doit contenir un caractère spécial."
      ),

    confirmPassword: z
      .string()
      .min(1, "Veuillez confirmer votre mot de passe."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  });

  export const registerRecruiterSchema = z
  .object({
    name: z
      .string()
      .min(1, "Le nom est requis.")
      .max(50, "Le nom ne peut dépasser 50 caractères."),

    email: z
      .string()
      .email("Veuillez entrer une adresse e-mail valide.")
      .max(100, "L'adresse e-mail est trop longue."),

    password: z
      .string()
      .min(8, "Le mot de passe doit comporter au moins 8 caractères.")
      .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule.")
      .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule.")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre.")
      .regex(
        /[^A-Za-z0-9]/,
        "Le mot de passe doit contenir un caractère spécial."
      ),

    confirmPassword: z
      .string()
      .min(1, "Veuillez confirmer votre mot de passe."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  });