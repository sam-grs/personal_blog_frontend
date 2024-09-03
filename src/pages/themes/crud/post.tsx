import { Theme } from "models";
import { create } from "services";

export async function post(
  theme: Theme,
  set: Function,
  token: string,
  handleLogout: Function
) {
  try {
    await create(`/temas`, theme, set, {
      headers: {
        Authorization: token,
      },
    });

    alert("Tema cadastrado com Sucesso");
  } catch (err: any) {
    if (err.toStrig().includes("403")) {
      alert("O token expirou, favor logar novamente");
      handleLogout();
    } else alert("Erro ao atualizar o Tema");
  }
}