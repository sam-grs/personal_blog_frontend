import { Link } from "react-router-dom";

import { Button } from "components";
import { Post } from "models";
import { formatDate } from "utils";

type PostProps = {
  post: Post;
};

export function PostCard({ post }: PostProps) {
  const date = formatDate(post?.date_time);

  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src="" className="h-12 rounded-full" alt="" />
          <h3 className="text-lg font-bold text-center uppercase ">
            {post?.user?.name}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{post.title}</h4>
          <p>texto base</p>
          <p>Tema: </p>
          <p>Data: {date} </p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/edit-post/${post.id}`} className="w-full">
          <Button>Editar</Button>
        </Link>
        <Link to={`/delete-post/${post.id}`} className="w-full">
          <Button>Deletar</Button>
        </Link>
      </div>
    </div>
  );
}
