import React, { useState } from 'react';
// roteamento
import { useSearchParams, Link, useNavigate } from 'react-router-dom';

// para usar no formulário
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createRegisterSchema } from '@/validation/schemas/register';

// hooks
import { useData } from '@/hooks/useData';

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

  // hooks
  const navigate = useNavigate();
  const { getUsers, addUser } = useData();

  // estado para controlar o carregamento
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(createRegisterSchema(userType)),
    defaultValues: {
      name: 'Pedro Lucas',
      surname: 'Almeida Cunha',
      cpf: '56267721892',
      gender: userType === 'player' ? 'female' : 'male',
      email: 'pedrolucasalmeida7@hotmail.com',
      password: '#Teste1234@',
      confirmPassword: '#Teste1234@',
      birthdate: '2006-11-21'
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // verificar se email já existe
      const users = getUsers();
      const emailExists = users.find(
        user => user.email.toLowerCase() === data.email.toLowerCase()
      );
      
      if (emailExists) { setError('email', { 
          type: 'manual', 
          message: 'Este email já está cadastrado' 
        });
        setIsSubmitting(false);
        return;
      }

      // verificar se CPF já existe
      const cpfExists = users.find(user => user.cpf === data.cpf);
      
      if (cpfExists) {
        setError('cpf', { 
          type: 'manual', 
          message: 'Este CPF já está cadastrado' 
        });
        setIsSubmitting(false);
        return;
      }

      // preparar dados do usuário (sem confirmPassword)
      const { confirmPassword, ...userData } = data;
      const newUser = { 
        ...userData, 
        type: userType,
        id: Date.now() // será sobrescrito pelo addUser, mas incluindo por segurança
      };

      // adicionar usuário
      addUser(newUser);

      // redirecionar para login com mensagem de sucesso
      navigate('/login?message=cadastro-sucesso');

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setSubmitError('Erro interno. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
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
          isSubmitting={isSubmitting}
          submitError={submitError}
          userType={userType}
        />
      </div>
    </div>
  )
}