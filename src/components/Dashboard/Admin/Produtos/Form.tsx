'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const APPLICATION_URL = process.env.APPLICATION_URL

export default function FormCreateProduct() {
  const { register, handleSubmit } = useForm();
  const handleSubmitForm = async (productData: any) => {
    
    const {data} = await axios.post('/api/product', productData);
    console.log(data);
    
    return window.location.replace(`${APPLICATION_URL}/admin/dashboard/produtos`)
  };
  return (
    <div>
      <form
        className="w-full max-w-lg mt-8"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              nome
            </label>
            <input
              {...register('name')}
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="nick"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              descrição
            </label>
            <input
              {...register('description')}
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="descr"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              preço
            </label>
            <input
              {...register('price')}
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="price"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              slug
            </label>
            <input
              {...register('slug')}
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
              id="slug"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              URL da imgem
            </label>
            <input
              {...register('imageUrl')}
              className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="url"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="p-3 bg-slate-500 hover:bg-slate-600 transition-all rounded "
              type="submit"
            >
              Salvar alterações
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
