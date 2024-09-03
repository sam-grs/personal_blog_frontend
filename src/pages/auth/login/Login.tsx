import { Input, Button } from "components";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "models";
import { AuthContext } from "contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

export function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin); // aqui chama o user sem precisar colocar os valores
  const { user, handleLogin, isLoading } = useContext(AuthContext);
  console.log("userLogin", userLogin);

  useEffect(() => {
    if (user.token !== "") {
      navigate("/");
    }
  }, [user]);

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
