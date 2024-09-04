import { Theme } from "models";
import { update } from "services";

export async function edit(
  theme: Theme,
  token: string,
  set: (data: any) => void,
  handleLogout: () => void,
  navigate?: any
) {
  try {
    await update(`/temas`, theme, set, {
      headers: {
        Authorization: token,
      },
    });

    alert("Tema atualizado com Sucesso");
    navigate();
  } catch (err: any) {
    if (err.toStrig().includes("403")) {
      alert("O token expirou, favor logar novamente");
      handleLogout();
    } else alert("Erro ao atualizar o Tema");
  }
}
