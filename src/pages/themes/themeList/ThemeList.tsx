import { DNA } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { routes } from "routes";
import { CardTheme } from "../cardTheme";
import { findId } from "../crud";

export function ThemeList() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const token = user.token;

  useEffect(() => {
    // mudar o nome para findThemes
    findId(setThemes, token);

    if (token === "") {
      alert("Você precisa estar logado");
      navigate(routes.login);
    }
  }, [token, themes.length]);

  return (
    <>
      {themes.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <CardTheme key={theme.id} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
