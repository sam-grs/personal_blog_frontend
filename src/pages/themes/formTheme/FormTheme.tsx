import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { find, update, create } from "services";

export function FormTheme() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [theme, setTheme] = useState<Theme>({} as Theme);
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findId(id: string) {
    await find(`/temas/${id}`, setTheme, {
      headers: {
        Authorization: token,
      },
    });
  }

  // ver se vai dar problema no useEffect
  useEffect(() => {
    if (id !== undefined) {
      findId(id);
    }

    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [id, token]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setTheme({
      ...theme,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(theme));
  }

  // Verificar se vai dar erro no Authorization

  async function createTheme(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await update(`/temas`, theme, setTheme, {
          headers: {
            Authorization: token,
          },
        });

        alert("Tema atualizado com Sucesso");
        navigate("/themes");
      } catch (err: any) {
        if (err.toStrig().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else alert("Erro ao atualizar o Tema");
      }
    } else {
      try {
        await create(`/temas`, theme, setTheme, {
          headers: {
            Authorization: token,
          },
        });

        alert("Tema cadastrado com sucesso");
      } catch (err: any) {
        if (err.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao cadastrado o Tema");
        }
      }
    }
    navigate("/themes");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar tema" : "Editar tema"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={createTheme}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={theme.about}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}
