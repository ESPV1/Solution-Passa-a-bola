import { RootLayout } from "./private-layout.jsx";
import { 
  Home,
  Login,
  Register,
  PerfilTorcedor,
  Quadras,
  ListaTimes,
  UserTypeSelection
} from "@/pages";
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
          <Route path="courts" element={<Quadras />} />
          <Route path="team-list" element={<ListaTimes />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="user-type" element={<UserTypeSelection />} />
      <Route path="register" element={<Register />} />
      {/* Rotas protegidas */}
    </Routes>
  );
}
