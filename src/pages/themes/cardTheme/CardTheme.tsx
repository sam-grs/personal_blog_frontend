import { Link } from "react-router-dom";

import { Theme } from "models";

type ThemeProps = { theme: Theme };

export function CardTheme({ theme }: ThemeProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hthemeden justify-between">
      <header className="py-2 px-6 bg-indigo-700 text-white font-bold text-2xl">
        Tema
      </header>

      <p className="p-8 text-3xl bg-slate-200 h-full">Descricao tema:</p>
      <div className="flex">
        <Link
          to={`/editTheme/${theme}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deleteTheme/${theme}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}
