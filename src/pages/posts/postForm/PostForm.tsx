import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Input } from "components";
import { AuthContext } from "contexts";
import { Post, Theme } from "models";
import { find, update, create } from "services";
import { routes } from "routes";

const initialValues = {
  id: "0",
  title: "",
  your_text: "",
  date_time: new Date(),
  theme: null,
  user: null,
};

export function PostForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;
  const [themes, setThemes] = useState<Theme[]>([]);
  const [theme, setTheme] = useState<Theme>({ id: "0", about: "" });
  const [post, setPost] = useState<Post>(initialValues);
  const loadingTheme = theme.about === "";

  useEffect(() => {
    findThemes();
    if (id !== undefined) {
      findPostId(id);
    }

    // será que precisa?
    if (theme.id !== "0") {
      setPost({
        ...post,
        theme: theme,
      });
    }

    if (token === "") {
      alert("Você precisa estar logado");
      navigate(routes.login);
    }
  }, [id, theme, token]);

  async function findPostId(id: string) {
    await find(`/postagens/${id}`, setPost, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findThemeId(id: string) {
    await find(`/temas/${id}`, setTheme, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findThemes() {
    await find("/temas", setThemes, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      theme: theme,
      user: user,
    });
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      try {
        await update(`/postagens`, post, setPost, {
          headers: {
            Authorization: token,
          },
        });
        alert("Postagem atualizada com sucesso");
        navigate("/posts");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao atualizar a Postagem");
        }
      }
    } else {
      try {
        await create(`/postagens`, post, setPost, {
          headers: {
            Authorization: token,
          },
        });

        alert("Postagem cadastrada com sucesso");
        navigate("/posts");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao cadastrar a Postagem");
        }
      }
    }
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8"></h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Digite o título da postagem"
            name="title"
            value={post.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Digite o texto da postagem"
            name="your_text"
            value={post.your_text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da postagem</p>
          <select
            name="theme"
            id="tema"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => findThemeId(e.currentTarget.value)}
          >
            <option defaultValue="" disabled>
              Selecione um tema
            </option>

            {themes.map((theme) => (
              <option value={theme.id}>{theme.about}</option>
            ))}
          </select>
        </div>
        <Button disabled={loadingTheme} type="submit">
          {loadingTheme
            ? "Carregando"
            : id !== undefined
            ? "Editar"
            : "Cadastrar"}
        </Button>
      </form>
    </div>
  );
}
