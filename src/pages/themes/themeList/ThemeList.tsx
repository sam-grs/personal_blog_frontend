import { DNA } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Theme } from "models";
import { AuthContext } from "contexts";
import { find } from "services";
import { CardTheme } from "../cardTheme";

export function ThemeList() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findTheme() {
    try {
      await find("/temas", setThemes, {
        headers: { Authorization: token },
      });
    } catch (err: any) {
      if (err.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    findTheme(); // qualquer coisa mudar

    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
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
