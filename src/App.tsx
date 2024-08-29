import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "components";
import { AuthProvider } from "contexts";
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
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/themes" element={<ThemeList />} />
            {/* Ver depois de mudar os nomes, pq nao sei se ta no ingles certo */}
            <Route path="/theme-registration" element={<FormTheme />} />
            <Route path="/edit-theme/:id" element={<FormTheme />} />
            <Route path="/delete-theme/:id" element={<DeleteTheme />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
