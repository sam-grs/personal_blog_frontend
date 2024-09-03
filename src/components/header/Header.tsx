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
    <div className="flex justify-between p-4 bg-indigo-700 text-white w-full text-lg">
      <Link to={routes.home} className="text-2xl font-bold">
        Blog Pessoal
      </Link>

      {user.token === "" ? (
        <div className="flex gap-4">
          <Link to={routes.login}>Logar</Link>
        </div>
      ) : (
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
