import { FC } from "react";

type Props = {
  title: string;
  description: string;
};

export const Home: FC<Props> = ({ title, description }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Seja Bem Vinde!</h2>
          <p>Expresse aqui seus pensamentos e opiniões</p>
        </div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.imgur.com/VpwApCU.png"
            alt="Imagem da Página Home"
            width="400px"
          />
        </div>

        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
