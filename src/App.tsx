import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "components";
import { AuthProvider } from "contexts";
import { routes } from "routes";
import {
  Home,
  Login,
  Register,
  ThemeList,
  ThemeForm,
  DeleteTheme,
  ListPosts,
  PostForm,
  DeletePost,
} from "pages";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        {/* Define o tamanho default da page */}
        <div className="min-h-[80vh]">
          <Routes>
            <Route path={routes.initial} element={<Login />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.register} element={<Register />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.themes} element={<ThemeList />} />
            <Route path={routes.themesRegistration} element={<ThemeForm />} />
            <Route path={routes.editTheme} element={<ThemeForm />} />
            <Route path={routes.deleteTheme} element={<DeleteTheme />} />
            <Route path={routes.posts} element={<ListPosts />} />
            <Route path={routes.editPost} element={<PostForm />} />
            <Route path={routes.deletePost} element={<DeletePost />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
