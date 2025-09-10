import React from 'react'
import player from '@/assets/player.png'

export default function Login() {
  return (
    <div className='flex h-screen items-center justify-center text-3xl font-bold'>
      <div className="flex rounded-xl w-8/10 h-3/4 items-center justify-center">
        <img className='w-1/2' src={player} alt="" />
      </div>
    </div>
  )
}