import { RotatingLines } from "react-loader-spinner";
import { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserLogin } from "models";
import { AuthContext } from "contexts";
import { Button, Card, CardContent, CardTitle, Input } from "components";

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
    <div className="flex justify-center items-center h-screen bg-pink">
      <Card className="w-full max-w-[350px]">
        <CardTitle className="text-dark_purple text-center text-3xl">
          Login
        </CardTitle>
        <CardContent>
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
            <p className="text-center text-dark_purple">
              Não possui uma conta?{" "}
              <Link to="/register" className="text-purple hover:underline">
                Cadastrar
              </Link>
            </p>
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
        </CardContent>
      </Card>
    </div>
  );
}
