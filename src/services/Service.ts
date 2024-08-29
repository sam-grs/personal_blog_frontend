import axios from "axios";

const api = axios.create({
  baseURL: "https://personal-blog-backend-15mq.onrender.com/",
});

export const auth = async (url: string, data: Object, setData: Function) => {
  // fazer o retorno pra lembrar
  const response = await api.post(url, data);
  setData(response.data);
};

export const create = async (
  url: string,
  data: Object,
  setData: Function,
  header: Object
) => {
  const response = await api.post(url, data, header);
  setData(response.data);
};

export const find = async (url: string, setData: Function, header: Object) => {
  const response = await api.get(url, header);
  setData(response.data);
};

export const update = async (
  url: string,
  data: Object,
  setData: Function,
  header: Object
) => {
  const response = await api.post(url, data, header);
  setData(response.data);
};

export const del = async (url: string, header: Object) => {
  await api.delete(url, header);
};
