import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { routes } from "routes";
import { Button, Input } from "components";
import { post, edit, findId } from "../crud";

export function ThemeForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [theme, setTheme] = useState<Theme>({} as Theme);
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const back = useCallback(() => {
    navigate(routes.login);
  }, [navigate]);

  useEffect(() => {
    if (id !== undefined) {
      findId(setTheme, token, id, handleLogout);
    }

    if (token === "") {
      alert("Você precisa estar logado");
      back();
    }
  }, [id, token, handleLogout, back]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setTheme({
      ...theme,
      [e.target.name]: e.target.value,
    });
    JSON.stringify(theme);
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      edit(theme, token, setTheme, handleLogout, navigate(routes.themes));
    } else {
      post(theme, setTheme, token, handleLogout);
    }
    navigate(routes.themes);
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar tema" : "Editar tema"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input
            name="about"
            placeholder="Digite sua descrição"
            value={theme?.about || ""}
            onChange={updateState}
          />
        </div>
        <Button type="submit">
          {id === undefined ? "Cadastrar" : "Editar"}
        </Button>
      </form>
    </div>
  );
}
