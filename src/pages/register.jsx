import React from 'react';
// roteamento
import { useSearchParams, Link } from 'react-router-dom';

// para usar no formulário
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/validation/schemas/register';

// formulário
import Form from '@/components/register/register-form';

// página para caso o tipo de usuário não seja selecionado ou seja inválido
import { UserTypeNotSelected } from '../components/register/usertype-not-selected';

// imagens 
import fan from '@/assets/fan.png';
import player from '@/assets/player-register.jpg';

export default function Register() {

  // pega os parâmetros da URL
  const [searchParams] = useSearchParams()
  // pega o valor do parâmetro type
  const userType = searchParams.get('type')
  // array com os tipos de usuário válidos
  const validUserTypes = ['fan', 'player']
  // verifica se o tipo da URL está no array de tipos válidos
  const isValidUserType = userType && validUserTypes.includes(userType)

  const { register, handleSubmit, formState: { errors } } = useForm({
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
    // todo: precisa implementar isso de acordo com a lógica de armazenamento.
  };

  if (!isValidUserType) return <UserTypeNotSelected />

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-15">
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
              to={`/register?type=${userType === 'fan' ? 'player' : 'fan'}`}
              className="text-sm text-rose-500 underline hover:no-underline"
            >
              Fazer cadastro como {userType === 'fan' ? 'Jogadora' : 'Torcedor'}
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