import axios from "axios";

const api = axios.create({
  baseURL: "https://personal-blog-backend-15mq.onrender.com/",
});

export const auth = async (url: string, data: Object, setData: Function) => {
  // fazer o retorno pra lembrar
  const response = await api.post(url, data);
  setData(response.data);
};

// export const login = async (url: string, data: Object, setData: Function) => {
//   const response = await api.post(url, data);
//   setData(response.data);
// };
