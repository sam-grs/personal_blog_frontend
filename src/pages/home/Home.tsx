import { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="bg-indigo-700 flex justify-center">
      <div className="container grid grid-cols-2 text-white">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
          <div className="flex justify-around gap-4">
            <div className="rounded border-white border-solid border-2 py-2 px-4">
              Nova Postagem
            </div>
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
  );
};
