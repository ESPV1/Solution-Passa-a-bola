import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/ui";
import { useAuth } from "./hooks/useAuth";

export function PublicLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}