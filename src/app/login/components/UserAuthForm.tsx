'use client'

import { FormEvent } from 'react'

export function UserAuthForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="block h-11 rounded-lg bg-gray-400 p-3 text-black-500/60 placeholder:text-black-500/60"
          type="email"
          id="email"
          placeholder="Digite seu endereço de email..."
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Senha</label>
        <input
          className="h-11 rounded-lg bg-gray-400 p-3 text-black-500/60 placeholder:text-black-500/60"
          type="password"
          id="password"
          placeholder="Digite sua senha..."
        />
      </div>

      <button
        className="rounded-xl bg-white-400 p-3 text-2xl text-black-900"
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}
