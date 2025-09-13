import { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import users from "@/data/json/users.json";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Carrega o usuário do localStorage ao iniciar
  useEffect(() => {
    localStorage.clear();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    const foundUser = users.find((user) => user.email === userData.email);

    if (foundUser) {
      if (foundUser.password === userData.password) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        return { success: true }
      } else {
        return { success: false, message: 'Senha Incorreta' }
      }
    } else {
        return { success: false, message: 'Usuário não encontrado' }
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}