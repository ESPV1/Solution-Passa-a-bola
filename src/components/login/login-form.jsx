import { Link } from "react-router-dom";
import Input from "../ui/input";

export default function LoginForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
  className
}) {

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <Input label='Email' name='email' type='email'
        register={register} errors={errors} required
      />
      <Input label='Senha' name='password' type='password'
        register={register} errors={errors} required
      />
      <button className="w-full py-2.5 mb-6 rounded-lg uppercase tracking-widest hover:cursor-pointer text-lg font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors duration-200" type="submit">Entrar</button>
      <Link to='/forgot-password' className="text-sm text-rose-500 mb-6 underline hover:no-underline">
        Esqueceu a senha?
      </Link>
      <div className="flex text-sm gap-1">
        <span className="text-gray-600 no-underline">Não tem uma conta?</span>
        <Link to='/register' className="text-rose-500 underline hover:no-underline">
          <span className="">Crie uma conta para jogar!</span>
        </Link>
      </div>
    </form>
  );
}