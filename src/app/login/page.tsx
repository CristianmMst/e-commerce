"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { IoIosArrowBack } from "react-icons/io";

function Login() {
  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <section className="h-screen grid place-content-center">
      <form className="flex flex-col w-96 justify-center gap-y-4 border border-slate-200 p-10 rounded-md">
        <Link
          className="flex justify-start items-center gap-x-2 font-bold text-sm w-20 mb-4"
          href={"/"}
        >
          <IoIosArrowBack />
          Volver
        </Link>
        <h2 className="font-bold text-lg">¡Bienvenido de nuevo!</h2>
        <input
          type="email"
          className="bg-slate-200 p-2 rounded placeholder:text-slate-400"
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          className="bg-slate-200 p-2 rounded placeholder:text-slate-400"
          placeholder="Contraseña"
        />
        <button className="bg-black text-white p-2 rounded" type="submit">
          Entrar
        </button>
        <hr className="border-t border-slate-300 rounded" />
        <button
          type="button"
          className="bg-black text-white p-2 rounded"
          onClick={loginWithGoogle}
        >
          Login with google
        </button>
      </form>
    </section>
  );
}

export default Login;
