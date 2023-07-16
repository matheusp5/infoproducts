'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const handleSubmitForm = async (credentials: any) => {
    const { data } = await axios.post('/api/register', credentials);
    if (data.code == 201) return router.push('/login');
  };
  return (
    <div className="bg-slate-900 w-1/3 m-auto p-8 rounded ">
      <h1 className="text-center text-4xl">Registro</h1>
      <form
        className="flex flex-col mt-10"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <input
          {...register('name')}
          type="text"
          placeholder="Nome completo"
          className="bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <input
          {...register('email')}
          type="email"
          placeholder="E-mail"
          className="mt-4 bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Senha"
          className="mt-4 bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <input
          {...register('password2')}
          type="password"
          placeholder="Confirmar senha"
          className="mt-4 bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <div>
          <input
            type="checkbox"
            name="terms"
            className="ml-1 mt-4 "
            id="terms"
          />
          <label htmlFor="terms" className="ml-2">
            Li e concordo com o termos.
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 bg-slate-800 rounded py-2 px-3 hover:bg-slate-700 transition-all"
        >
          registrar-se
        </button>
      </form>
    </div>
  );
}
