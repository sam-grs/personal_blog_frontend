import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "contexts";
import { routes } from "routes";

export function Header() {
  const { user, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário foi desconectado");
  }

  return (
    <div className="flex justify-between items-center h-[100px] px-10 bg-dark_purple text-purple w-full text-lg">
      <Link to={routes.home}>
        <img
          className="w-[70px] rounded-full"
          src="src/assets/logo_naut.png"
          alt="Logo de um astronauta"
        />
      </Link>

      {user.token !== "" && (
        <div className="flex gap-4">
          <Link to={routes.posts}>Postagens</Link>
          <Link to={routes.themes}>Temas</Link>
          <Link to={routes.themesRegistration}>Cadastrar Tema</Link>
          <Link to={routes.profile}>Perfil</Link>
          <Link to={routes.home} onClick={logout}>
            Sair
          </Link>
        </div>
      )}
    </div>
  );
}
