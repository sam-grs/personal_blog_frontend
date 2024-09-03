import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "components";
import { Home, Login, Register } from "pages";
import { AuthProvider } from "contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
