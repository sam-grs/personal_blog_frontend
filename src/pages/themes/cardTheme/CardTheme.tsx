import { Link } from "react-router-dom";

import { Theme } from "models";
import { Button } from "components";

type ThemeProps = { theme: Theme };

export function CardTheme({ theme }: ThemeProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hthemeden justify-between">
      <header className="py-2 px-6 bg-indigo-700 text-white font-bold text-2xl">
        Tema
      </header>

      <p className="p-8 text-3xl bg-slate-200 h-full">
        Descricao tema: {theme.about}
      </p>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Link to={`/edit-theme/${theme.id}`}>
          <Button fullWidth={true}>Editar</Button>
        </Link>
        <Link to={`/delete-theme/${theme.id}`}>
          <Button fullWidth={true}>Deletar</Button>
        </Link>
      </div>
    </div>
  );
}
