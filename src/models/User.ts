import { Post } from "./Post";

export interface User {
  id: string;
  name: string;
  user: string;
  photo: string;
  password: string;
  // verificar o nome do backend
  post?: Post | null;
}
