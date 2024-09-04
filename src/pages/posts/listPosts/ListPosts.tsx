import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostCard } from "../postCard";
import { find } from "services";
import { Post } from "models";
import { AuthContext } from "contexts";
import { routes } from "routes";
import { DNA } from "react-loader-spinner";

export function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const back = useCallback(() => {
    navigate(routes.login);
  }, [navigate]);

  useEffect(() => {
    findPost();

    if (token === "") {
      alert("Você precisa estar logado");
      back();
    }
  }, [token, back]);

  async function findPost() {
    try {
      await find("/postagens", setPosts, {
        headers: {
          Authorization: token,
        },
      });
    } catch (err: any) {
      if (err.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  return (
    <>
      {posts.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
