import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Form from '@/components/cadastro/register-form'
import users from '../data/json/users.json'
import fan from '@/assets/fan.png'
import player from '@/assets/player.png'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validation/schemas/register'

export default function Register() {

  const [searchParams] = useSearchParams()
  const userType = searchParams.get('type')

  const validUserTypes = ['fan', 'player']
  const isValidUserType = userType && validUserTypes.includes(userType)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: 'Pedro Lucas',
      surname: 'Almeida Cunha',
      cpf: '56267721892',
      gender: 'male',
      email: 'pedrolucasalmeida7@hotmail.com',
      password: '#Teste1234@',
      confirmPassword: '#Teste1234@',
      birthdate: '2006-11-21'
    }
  });

  const onSubmit = (data) => {
    const userData = { ...data, type: userType }
    delete userData.confirmPassword
    users.push({ id: users.length + 1, ...userData })
    // todo: precisa implementar isso de acordo com a lógica de armazenamento.
    console.log(users);
  };

  // todo: precisa transformar isso em um componente à parte.
  if (!isValidUserType) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-15">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Tipo de usuário não selecionado
          </h2>
          <p className="text-gray-600">
            Você precisa escolher se deseja ser um torcedor ou uma jogadora.
          </p>
          <Link
            to="/user-type"
            className="inline-block px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            Escolher tipo de usuário
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-15">
      {/* // todo: precisa colocar a imagem de jogadora (a que está é a mesma da de login) */}
      <div className="flex min-w-1/2">
        <img className='max-w-md' src={userType === 'fan' ? fan : player} alt="" />
      </div>
      <div className="w-1/2 space-y-8">
        <div className='font-bold'>
          <h2 className="text-center text-5xl text-rose-500">
            Passa a Bola
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Cadastro como {userType === 'fan' ? 'Torcedor' : 'Jogadora'}
          </p>
          <div className="mt-2 text-center">
            <Link
              to="/user-type"
              className="text-sm text-rose-500 underline hover:no-underline"
            >
              Alterar tipo de usuário
            </Link>
          </div>
        </div>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          className="mt-8 space-y-6 font-bold"
        />
      </div>
    </div>
  )
}