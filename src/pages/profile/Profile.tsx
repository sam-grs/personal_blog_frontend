import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "contexts/AuthContext";
import { routes } from "routes";

export function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.token === "") {
      navigate(routes.home);
    }
  }, [user.token]);

  return (
    <div className="m-4 mx-auto rounded-2xl overflow-hidden container">
      <img
        className="border-white border-b-8 w-full h-72 object-cover"
        src="https://i.imgur.com/ZZFAmzo.jpg"
        alt="Capa do Perfil"
      />

      <img
        className="relative z-10 border-8 border-white mx-auto mt-[-8rem] rounded-full w-56"
        src={user.photo}
        alt={`Foto de perfil de ${user.name}`}
      />

      <div className="relative flex flex-col justify-center items-center bg-sky-500 mt-[-6rem] h-72 text-2xl text-white">
        <p>Nome: {user.name} </p>
        <p>Email: {user.user}</p>
      </div>
    </div>
  );
}
