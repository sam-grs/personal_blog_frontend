import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { User } from "models";
import { auth } from "services";
import { routes } from "routes";
import { Input, Button, Card, CardTitle, CardContent } from "components";

const initialValues = {
  id: "0",
  name: "",
  user: "",
  photo: "-",
  password: "",
};

export function Register() {
  const navigate = useNavigate();
  const [savePassword, setSavePassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>(initialValues);

  const back = useCallback(() => {
    navigate(routes.login);
  }, [navigate]);

  useEffect(() => {
    if (user.id !== "0") {
      back();
    }
  }, [user, back]); // ver se vai dar problema

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSavePassword(e: ChangeEvent<HTMLInputElement>) {
    setSavePassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (savePassword === user.password && user.password.length >= 8) {
      setIsLoading(true);

      try {
        await auth(`/usuarios/cadastrar`, user, setUser);
        alert("Usuário cadastrado!");
      } catch {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert("Inválido, verifique as informações do cadastro");
      setUser({ ...user, password: "" });
      setSavePassword("");
    }

    setIsLoading(false);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-pink">
      <Card className="w-full max-w-[350px]">
        <CardTitle className="text-dark_purple text-center text-3xl">
          Cadastro
        </CardTitle>
        <CardContent>
          <form
            className="flex flex-col w-full max-w-xs gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              name="name"
              placeholder="Nome"
              value={user.name}
              onChange={handleChange}
            />
            <Input
              name="user"
              type="email"
              placeholder="Email"
              value={user.user}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              value={user.password}
              onChange={handleChange}
            />
            <Input
              name="savePassword"
              type="password"
              placeholder="Confirmar Senha"
              value={savePassword}
              onChange={handleSavePassword}
            />
            <Link to={routes.login}>
              <Button variant="outline" className="w-full">
                Voltar
              </Button>
            </Link>

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
                <span>Cadastrar</span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
