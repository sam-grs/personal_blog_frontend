import { find } from "services";

export async function findId(
  set: (data: any) => void,
  token: string,
  id: string = "",
  handleLogout?: any
) {
  try {
    await find(`/temas/${id}`, set, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err: any) {
    if (err.toStrig().includes("403")) {
      alert("O token expirou, favor logar novamente");
      handleLogout();
    }
  }
}
