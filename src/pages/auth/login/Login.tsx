import { RotatingLines } from "react-loader-spinner";
import { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Input, Button } from "components";
import { UserLogin } from "models";
import { AuthContext } from "contexts";

export function Login() {
  // pode dar erro de uncontroled
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);
  const { handleLogin, isLoading } = useContext(AuthContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(userLogin);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="text-3xl font-semibold mb-3">Login</h1>
      <form
        className="flex flex-col w-full max-w-xs gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="user"
          type="email"
          placeholder="Email"
          value={userLogin.user || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={userLogin.password || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Button type="submit">
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </Button>
      </form>
      <p>
        Não possui uma conta?{" "}
        <Link to="/register" className="text-indigo-700 hover:underline">
          Cadastrar
        </Link>
      </p>
    </div>
  );
}
