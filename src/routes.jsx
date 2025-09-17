import { RootLayout } from "./private-layout.jsx";
import { 
  Home,
  Login,
  Register,
  PerfilTorcedor,
  PerfilJogadora,
  Quadras,
  ListaTimes,
  PlayerList,
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
          <Route path="fan-profile" element={<PerfilTorcedor />} />
          <Route path="player-profile" element={<PerfilJogadora />} />
          <Route path="perfil-jogadora/:id" element={<PerfilJogadora />} />
          <Route path="courts" element={<Quadras />} />
          <Route path="team-list" element={<ListaTimes />} />
          <Route path="player-list" element={<PlayerList />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="user-type" element={<UserTypeSelection />} />
      <Route path="register" element={<Register />} />
      {/* Rotas protegidas */}
    </Routes>
  );
}
