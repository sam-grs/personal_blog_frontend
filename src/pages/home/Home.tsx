import { Link } from "react-router-dom";

import { Button } from "components";
import { ListPosts, PostModal } from "../posts";
import { routes } from "routes";

export function Home() {
  return (
    <>
      <div className="bg-indigo-700 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

            <div className="flex justify-around gap-4">
              <PostModal />
              <Link to={routes.posts}>
                <Button>Ver postagens</Button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://i.imgur.com/VpwApCU.png"
              alt="Imagem da Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListPosts />
    </>
  );
}
