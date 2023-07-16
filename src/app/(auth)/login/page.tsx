'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const handleSubmitForm = async ({ email, password }: any) => {
    const result: any = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    return router.push('/');
  };
  return (
    <div className="bg-slate-900 w-1/3 m-auto p-8 rounded ">
      <h1 className="text-center text-4xl">Login</h1>
      <form
        className="flex flex-col mt-10"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <input
          type="email"
          {...register('email')}
          placeholder="E-mail"
          className=" bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <input
          type="password"
          {...register('password')}
          placeholder="Senha"
          className="mt-4 bg-slate-900 py-2 px-3 rounded border border-slate-800 hover:border-slate-600 outline-none transition-all"
        />
        <button
          type="submit"
          className="mt-4 bg-slate-800 rounded py-2 px-3 hover:bg-slate-700 transition-all"
        >
          logar-se
        </button>
      </form>
    </div>
  );
}
