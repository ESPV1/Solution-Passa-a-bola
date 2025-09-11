import React from 'react'
import player from '@/assets/player.png'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../validation/schemas/login'
import Form from '../components/login/login-form'
import users from '../data/json/users.json';


export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // find retorna o usuário que tem o email igual ao enviado ou undefined se não achar
    const foundUser = users.find(user => user.email === data.email);

    if (foundUser) {
      if (foundUser.password === data.password) {
        console.log('Login successful!', foundUser);
        alert(`Bem-vindo, ${foundUser.firstName} ${foundUser.lastName}!`);
        // Aqui você pode redirecionar o usuário ou salvar no estado/localStorage
      } else {
        console.log('Senha incorreta');
        alert('Senha incorreta!');
      }
    } else {
      console.log('Usuário não encontrado');
      alert('Usuário não encontrado!');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center text-3xl font-bold'>
      <div className="flex rounded-xl w-8/10 h-3/4 items-center justify-center">
        <img className='w-6/10' src={player} alt="" />
        <div className="flex w-1/2 flex-col items-center justify-center h-full gap-10">
          <div className='text-center'>
            <h1 className='text-rose-500 text-5xl'>Passa a Bola</h1>
            <h3 className='text-base text-gray-500'>Faça log-in e comece a jogar!</h3>
          </div>
          <Form
            className="flex flex-col items-center justify-center w-full px-15"
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}