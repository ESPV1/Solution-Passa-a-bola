import React, { useState } from "react";
// roteamento
import { useSearchParams, Link, useNavigate } from "react-router-dom";

// para usar no formulário
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRegisterSchema } from "@/validation/schemas/register";

// hooks
import { useData } from "@/hooks/useData";

// formulário
import Form from "@/components/register/register-form";

// página para caso o tipo de usuário não seja selecionado ou seja inválido
import { UserTypeNotSelected } from "../components/register/usertype-not-selected";

// imagens
import fan from "@/assets/fan.png";
import player from "@/assets/player-register.jpg";

export default function Register() {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type");
  const validUserTypes = ["fan", "player"];
  const isValidUserType = userType && validUserTypes.includes(userType);

  const navigate = useNavigate();
  const { getUsers, addUser } = useData();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(createRegisterSchema(userType)),
    defaultValues: {
      name: "Pedro Lucas",
      surname: "Almeida Cunha",
      cpf: "56267721892",
      gender: userType === "player" ? "female" : "male",
      email: "pedrolucasalmeida7@hotmail.com",
      password: "#Teste1234@",
      confirmPassword: "#Teste1234@",
      birthdate: "2006-11-21",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const users = getUsers();
      const emailExists = users.find(
        (user) => user.email.toLowerCase() === data.email.toLowerCase()
      );
      if (emailExists) {
        setError("email", {
          type: "manual",
          message: "Este email já está cadastrado",
        });
        setIsSubmitting(false);
        return;
      }

      const cpfExists = users.find((user) => user.cpf === data.cpf);
      if (cpfExists) {
        setError("cpf", {
          type: "manual",
          message: "Este CPF já está cadastrado",
        });
        setIsSubmitting(false);
        return;
      }

      const { confirmPassword, ...userData } = data;
      const newUser = {
        ...userData,
        type: userType,
        id: Date.now(),
      };

      addUser(newUser);
      navigate("/login?message=cadastro-sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setSubmitError("Erro interno. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isValidUserType) return <UserTypeNotSelected />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl w-full max-w-4xl overflow-hidden h-auto md:h-[600px]">
        {/* Imagem (só desktop) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100 p-6">
          <img
            className="w-full max-w-sm h-full object-cover rounded-lg"
            src={userType === "fan" ? fan : player}
            alt={userType === "fan" ? "Torcedor" : "Jogadora"}
          />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 space-y-8">
          <div className="font-bold text-center">
            <h2 className="text-3xl md:text-5xl text-rose-500">Passa a Bola</h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              Cadastro como {userType === "fan" ? "Torcedor" : "Jogadora"}
            </p>
            <div className="mt-2">
              <Link
                to={`/register?type=${userType === "fan" ? "player" : "fan"}`}
                className="text-sm text-rose-500 underline hover:no-underline"
              >
                Fazer cadastro como{" "}
                {userType === "fan" ? "Jogadora" : "Torcedor"}
              </Link>
            </div>
          </div>

          <Form
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            className="mt-4 space-y-6 font-bold"
            isSubmitting={isSubmitting}
            submitError={submitError}
            userType={userType}
          />
        </div>
      </div>
    </div>
  );
}
