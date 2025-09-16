import React from 'react'
import { Link } from 'react-router-dom'

export default function UserTypeSelection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-15 bg-gray-50">
      <div className="max-w-4xl w-full flex items-center">
        {/* // todo: colocar o hover de mudar as imagens dependendo do botão  */}
        {/* lado esquerdo - imagem/placeholder */}
        <div className="w-1/2 pr-8">
          <div className="bg-gray-300 aspect-square rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-xl">Imagem do futebol</div>
          </div>
        </div>

        {/* lado direito - opções de seleção */}
        <div className="w-1/2 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold text-rose-500">
              Passa a Bola
            </h1>
            <p className="text-base font-bold text-gray-600">
              Como você quer participar da nossa comunidade?
            </p>
          </div>

          <div className="space-y-6">
            {/* botão torcedor */}
            <Link
              to="/register?type=fan"
              className="block w-full"
            >
              <button className="w-full py-4 px-8 bg-rose-500 hover:bg-rose-600 text-white text-xl font-bold rounded-lg transition-colors duration-200 hover:cursor-pointer">
                QUERO SER UM TORCEDOR
              </button>
            </Link>

            {/* botão jogadora */}
            <Link
              to="/register?type=player"
              className="block w-full"
            >
              <button className="w-full py-4 px-8 bg-rose-500 hover:bg-rose-600 text-white text-xl font-bold rounded-lg transition-colors duration-200 hover:cursor-pointer">
                QUERO SER UMA JOGADORA
              </button>
            </Link>
          </div>

          <div className="text-center font-bold">
            <p className="text-gray-500">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-rose-500 underline hover:no-underline">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}