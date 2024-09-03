import { UserLogin } from "models/UserLogin";
import { ReactNode, useState, createContext } from "react";
import { auth } from "services";

interface AuthContextProps {
  user: UserLogin;
  handleLogout(): void;
  handleLogin(user: UserLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

const initialValues = {
  id: "0",
  name: "",
  user: "",
  password: "",
  photo: "",
  token: "",
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserLogin>(initialValues);

  async function handleLogin(userLogin: UserLogin) {
    setIsLoading(true);

    try {
      await auth(`/usuarios/logar`, userLogin, setUser);
      alert("Usuário logado!");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("Dados incorretos");
    }

    setIsLoading(false);
  }

  function handleLogout() {
    setUser(initialValues);
  }

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
