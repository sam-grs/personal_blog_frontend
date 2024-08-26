import { Theme } from "./Theme";
import { User } from "./User";

export interface Post {
  id: string;
  title: string;
  your_text: string;
  date: string; // tem que ver no backend
  theme: Theme | null;
  user: User | null;
}
