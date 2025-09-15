import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Input from "../ui/input";
import { GenderSelect, SubmitButton } from "../ui";
import TermsAcceptance from "./terms-acceptance";
import { genderOptions, formFields } from '@/constants/register-form';


export default function RegisterForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
  className
}) {
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const allConditionsAccedpted = acceptPrivacy && acceptTerms;
  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {formFields.map((field) => (
          <Input
            key={field.name} name={field.name}
            label={field.label} type={field.type}
            register={register} errors={errors}
            required={field.required} containerStyle="mb-0"
            autoComplete={field.autoComplete}
          />
        ))}

        <GenderSelect
          register={register}
          errors={errors}
          options={genderOptions}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          register={register}
          errors={errors}
          required={true}
          containerStyle="mb-0"
          autoComplete="new-password"
        />

        <Input
          label="Confirmar Senha"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          required={true}
          containerStyle="mb-0"
          autoComplete="new-password"
        />
      </div>

      <TermsAcceptance
        acceptPrivacy={acceptPrivacy}
        setAcceptPrivacy={setAcceptPrivacy}
        acceptTerms={acceptTerms}
        setAcceptTerms={setAcceptTerms}
      />

      <SubmitButton
        isEnabled={allConditionsAccedpted}
        text="Criar Conta"
      />

      <div className="flex text-sm gap-1 justify-center">
        <span className="text-gray-600 no-underline">Já tem uma conta?</span>
        <Link to='/login' className="text-rose-500 underline hover:no-underline">
          <span className="">Faça login para jogar!</span>
        </Link>
      </div>
    </form>
  );
}