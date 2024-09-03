import { del } from "services";

export async function deleteItem(token: string, id: string = "") {
  try {
    await del(`/temas/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    alert("Tema apagado com sucesso");
  } catch (error) {
    alert("Erro ao apagar o Tema");
  }
}
