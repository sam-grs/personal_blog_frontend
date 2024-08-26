import { Input, Button } from "components";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "models";
import { auth } from "services";
import { RotatingLines } from "react-loader-spinner";

const initialValues = {
  id: "0",
  name: "",
  user: "",
  photo: "",
  password: "",
};

export function Register() {
  const navigate = useNavigate();
  const [savePassword, setSavePassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>(initialValues);

  useEffect(() => {
    if (user.id !== "0") {
      navigate("/login");
    }
  }, [!!user]);

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
      } catch (err) {
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
    <div className="flex flex-col justify-center h-screen items-center gap-4">
      <h1 className="text-3xl font-semibold mb-3">Cadastro</h1>
      <form
        className="flex flex-col w-full max-w-xs gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          placeholder="Nome"
          value={user.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          name="user"
          type="email"
          placeholder="Email"
          value={user.user}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          name="photo"
          placeholder="Foto"
          value={user.photo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={user.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          name="savePassword"
          type="password"
          placeholder="Confirmar Senha"
          value={savePassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSavePassword(e)}
        />

        <Button color="text-indigo-700" background="none">
          <Link to="/login">Voltar</Link>
        </Button>

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
    </div>
  );
}
