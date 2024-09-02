import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { routes } from "routes";
import { Button } from "components";
import { deleteItem, findId } from "../crud";

export function DeleteTheme() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [theme, setTheme] = useState<Theme>({} as Theme);
  const { user, handleLogout } = useContext(AuthContext);

  const token = user.token;
  const back = () => navigate(routes.themes);

  useEffect(() => {
    if (id !== undefined) {
      findId(setTheme, token, id, handleLogout);
    }

    if (token === "") {
      alert("Você precisa estar logado");
      navigate(routes.login);
    }
  }, [id, token]);

  function deleteTheme() {
    deleteItem(token, id);
    back();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar tema</h1>

      <p className="text-center font-semibold mb-4">
        Tem certeza de deletar o Tema?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Tema
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{theme.about}</p>
        <div className="flex">
          <Button onClick={back} fullWidth={true}>
            Não
          </Button>
          <Button onClick={deleteTheme} fullWidth={true}>
            Sim
          </Button>
        </div>
      </div>
    </div>
  );
}
