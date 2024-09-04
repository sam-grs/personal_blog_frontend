import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const auth = async (
  url: string,
  data: object,
  setData: (data: any) => void
) => {
  // fazer o retorno pra lembrar
  const response = await api.post(url, data);
  setData(response.data);
};

export const create = async (
  url: string,
  data: object,
  setData: (data: any) => void,
  header: object
) => {
  const response = await api.post(url, data, header);
  setData(response.data);
};

export const find = async (
  url: string,
  setData: (data: any) => void,
  header: object
) => {
  const response = await api.get(url, header);
  setData(response.data);
};

export const update = async (
  url: string,
  data: object,
  setData: (data: any) => void,
  header: object
) => {
  const response = await api.post(url, data, header);
  setData(response.data);
};

export const del = async (url: string, header: object) => {
  await api.delete(url, header);
};
