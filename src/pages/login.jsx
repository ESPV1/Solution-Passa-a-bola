import React, { useEffect, useState } from "react";
import player from "@/assets/player.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/schemas/login";
import Form from "../components/login/login-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // verifica se há mensagem de sucesso do cadastro
  useEffect(() => {
    const message = searchParams.get("message");
    if (message === "cadastro-sucesso") {
      setSuccessMessage(
        "Cadastro realizado com sucesso! Faça login para continuar."
      );
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/login", { replace: true });
      }, 5000);
    }
  }, [searchParams, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "carlos.santos@email.com",
      password: "fanPass789",
    },
  });

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setErrorMessage("");
    const res = await login(data);
    if (res.success) {
      navigate(from, { replace: true });
    } else {
      setErrorMessage(res.message || "Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl w-full max-w-5xl overflow-hidden">
        {/* Imagem (esconde em telas pequenas) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100">
          <img
            className="w-3/4 max-h-[80%] object-contain"
            src={player}
            alt="Player"
          />
        </div>

        {/* Área do formulário */}
        <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-8 md:p-12 gap-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500">
              Passa a Bola
            </h1>
            <h3 className="text-sm md:text-base text-gray-500 mt-2">
              Faça log-in e comece a jogar!
            </h3>
          </div>

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm w-full text-center">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm w-full text-center">
              {errorMessage}
            </div>
          )}

          <Form
            className="flex flex-col items-center justify-center w-full gap-4"
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
