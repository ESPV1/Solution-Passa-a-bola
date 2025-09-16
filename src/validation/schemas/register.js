import { z } from "zod";
import { validateCPF } from "@/utils/validateCPF";

// todo: revisar as validações
export const createRegisterSchema = (userType) => z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "O nome deve conter apenas letras e espaços"),

  surname: z
    .string()
    .min(2, "O sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "O sobrenome deve ter no máximo 50 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "O sobrenome deve conter apenas letras e espaços"),

  cpf: z
    .string()
    .min(1, "O CPF é obrigatório")
    .refine((cpf) => validateCPF(cpf), {
      message: "CPF inválido"
    }),

  birthdate: z
    .string()
    .min(1, "A data de nascimento é obrigatória")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 13 && age <= 120;
    }, {
      message: "Idade deve estar entre 13 e 120 anos"
    }),

  gender: userType === 'player' 
    ? z.literal("female", {
        errorMap: () => ({ message: "Jogadoras devem selecionar o gênero feminino" })
      })
    : z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Selecione um gênero válido" })
      }),

  email: z
    .email("Email inválido")
    .max(100, "O email deve ter no máximo 100 caracteres"),

  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(100, "A senha deve ter no máximo 100 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
      "A senha deve conter pelo menos: 1 letra minúscula, 1 maiúscula, 1 número e 1 caractere especial"),

  confirmPassword: z
    .string()
    .min(1, "A confirmação de senha é obrigatória")
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
});

// Mantém compatibilidade com código existente
export const registerSchema = createRegisterSchema();