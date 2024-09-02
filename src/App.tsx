import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "components";
import { AuthProvider } from "contexts";
import { routes } from "routes";
import {
  Home,
  Login,
  Register,
  ThemeList,
  FormTheme,
  DeleteTheme,
} from "pages";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        {/* Define o tamanho default da page */}
        <div className="min-h-[80vh]">
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.register} element={<Register />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.themes} element={<ThemeList />} />
            <Route path={routes.themesRegistration} element={<FormTheme />} />
            <Route path={routes.editTheme} element={<FormTheme />} />
            <Route path={routes.deleteTheme} element={<DeleteTheme />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
