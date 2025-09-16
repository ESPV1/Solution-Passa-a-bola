import { RootLayout } from "./private-layout.jsx";
import { Home, Login, PerfilTorcedor, Quadras, ListaTimes } from "@/pages";
import { ProtectedRoute } from "./components/protected-route.jsx";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./public-layout.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route path="perfil-torcedor" element={<PerfilTorcedor />} />
          <Route path="quadras" element={<Quadras />} />
          <Route path="lista-times" element={<ListaTimes />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      {/* Rotas protegidas */}
    </Routes>
  );
}
