import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fotoTorcedor from '../assets/fan.png'
import playerImage from '../assets/player-register.jpg'

export default function UserTypeSelection() {
  const [hoveredType, setHoveredType] = useState(null)

  const getDisplayImage = () => {
    if (hoveredType === 'fan') return fotoTorcedor
    if (hoveredType === 'player') return playerImage
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl w-full max-w-4xl overflow-hidden h-auto md:h-[600px]">
        
        {/* lado esquerdo - imagem (aparece só no desktop) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100 p-6">
          <div className="bg-gray-200 w-full max-w-sm h-full rounded-lg flex items-center justify-center overflow-hidden relative">
            {getDisplayImage() ? (
              <img 
                src={getDisplayImage()} 
                alt={hoveredType === 'fan' ? 'Torcedor' : 'Jogadora'}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <div className="text-gray-500 text-lg md:text-xl text-center px-4">
                Selecione uma opção
              </div>
            )}
          </div>
        </div>

        {/* lado direito - opções */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold text-rose-500">
              Passa a Bola
            </h1>
            <p className="text-sm md:text-base font-bold text-gray-600">
              Como você quer participar da nossa comunidade?
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <Link
              to="/register?type=fan"
              className="block w-full"
              onMouseEnter={() => setHoveredType('fan')}
              onMouseLeave={() => setHoveredType(null)}
            >
              <button className="cursor-pointer w-full py-3 md:py-4 px-6 md:px-8 bg-rose-500 hover:bg-rose-600 text-white text-lg md:text-xl font-bold rounded-lg transition-colors duration-200">
                QUERO SER UM TORCEDOR
              </button>
            </Link>

            <Link
              to="/register?type=player"
              className="block w-full"
              onMouseEnter={() => setHoveredType('player')}
              onMouseLeave={() => setHoveredType(null)}
            >
              <button className="cursor-pointer w-full py-3 md:py-4 px-6 md:px-8 bg-rose-500 hover:bg-rose-600 text-white text-lg md:text-xl font-bold rounded-lg transition-colors duration-200">
                QUERO SER UMA JOGADORA
              </button>
            </Link>
          </div>

          <div className="text-center font-bold">
            <p className="text-gray-500 text-sm md:text-base">
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
