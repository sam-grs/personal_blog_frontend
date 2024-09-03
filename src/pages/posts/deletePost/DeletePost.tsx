import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "components";
import { Post } from "models";
import { AuthContext } from "contexts";
import { del, find } from "services";
import { routes } from "routes";

export function DeletePost() {
  const [post, setPost] = useState<Post>({} as Post);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate(routes.login);
    }

    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id, token]);

  async function buscarPorId(id: string) {
    try {
      await find(`/postagens/${id}`, setPost, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  async function deletePost() {
    try {
      await del(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Postagem apagada com sucesso");
    } catch (error) {
      alert("Erro ao apagar a Postagem");
    }

    navigate(routes.posts);
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar postagem</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a postagem a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Postagem
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{post.title}</p>
          <p>{post.your_text}</p>
        </div>
        <div className="flex">
          <Button fullWidth={true}>Não</Button>
          <Button fullWidth={true} onClick={deletePost}>
            Sim
          </Button>
        </div>
      </div>
    </div>
  );
}
