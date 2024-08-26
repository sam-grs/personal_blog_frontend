import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";

export function Header() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário foi desconectado");
    navigate("/");
  }

  return (
    <div className="flex justify-between p-4 bg-indigo-700 text-white w-full text-lg">
      <Link to="/" className="text-2xl font-bold">
        Blog Pessoal
      </Link>

      <ul className="flex gap-4">
        <li>Postagens</li>
        <li>Temas</li>
        <li>Cadastrar Tema</li>
        <li>Perfil</li>
        <li>
          <Link to="" onClick={logout}>
            Sair
          </Link>
        </li>
      </ul>
    </div>
  );
}
