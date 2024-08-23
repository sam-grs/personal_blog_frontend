import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between p-4 bg-indigo-700 text-white w-full text-lg">
      <Link to="/" className="text-2xl font-bold">
        Blog Pessoal
      </Link>

      <ul className="flex gap-4">
        <li>Postagens</li>
        <li>Temas</li>
        <li>
          <Link to="/register">Cadastrar Tema</Link>
        </li>
        <li>Perfil</li>
        <li>Sair</li>
      </ul>
    </div>
  );
}
