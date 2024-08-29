import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { del, find } from "services";

export function DeleteTheme() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [theme, setTheme] = useState<Theme>({} as Theme);
  const { user, handleLogout } = useContext(AuthContext);

  const token = user.token;
  const back = () => navigate("/login");

  //   ver se o useEffect dará erro
  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      back();
    }

    if (id !== undefined) {
      findId(id);
    }
  }, [token, id]);

  async function findId(id: string) {
    try {
      await find(`/temas/${id}`, setTheme, {
        headers: {
          Authorization: token,
        },
      });
    } catch (err: any) {
      if (err.toStrig().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  async function deleteTheme() {
    try {
      await del(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Tema apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o Tema");
    }

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
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={back}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deleteTheme}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
