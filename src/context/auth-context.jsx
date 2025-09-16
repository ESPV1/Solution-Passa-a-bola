import { createContext, useEffect, useState } from "react";
import { useData } from "../hooks/useData";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getUsers, deleteUser, isInitialized } = useData();

  // gera um token de sessão único
  const generateSessionToken = () => {
    return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  // remove dados sensíveis do usuário
  const sanitizeUser = (user) => {
    const { password, ...safeUser } = user;
    return safeUser;
  };

  const getSession = () => {
    try {
      const raw = localStorage.getItem('app_session');
      if (!raw) return null;

      const session = JSON.parse(raw);

      // verifica se o token existe e se a sessão não expirou (24 horas)
      if (session.token && session.expiresAt && new Date() < new Date(session.expiresAt)) {
        return session;
      }

      // remove sessão expirada
      localStorage.removeItem('app_session');
      return null;
    } catch (error) {
      console.error('Erro ao recuperar sessão:', error);
      localStorage.removeItem('app_session');
      return null;
    }
  };

  useEffect(() => {
    // Aguarda a inicialização do DataProvider
    if (!isInitialized) {
      return;
    }

    const s = getSession();
    if (s) setUser(s.user);

    setIsLoading(false);
  }, [isInitialized]);

  const createSession = (user) => {
    const token = generateSessionToken();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // expira em 24 horas

    const session = {
      token,
      user: sanitizeUser(user), // remove a senha
      loginAt: new Date().toISOString(),
      expiresAt: expiresAt.toISOString(),
    };

    try {
      localStorage.setItem('app_session', JSON.stringify(session));
      return token;
    } catch (error) {
      console.error('Erro ao criar sessão:', error);
      throw new Error('Falha ao criar sessão');
    }
  };

  const login = async (userData) => {
    setIsLoading(true);

    try {
      const users = getUsers();
      const foundUser = users.find((user) => user.email === userData.email);

      if (!foundUser) {
        return { success: false, message: 'Usuário não encontrado' };
      }

      if (foundUser.password !== userData.password) {
        return { success: false, message: 'Senha incorreta' };
      }

      // cria sessão e obtém token
      const token = createSession(foundUser);

      // define usuário no estado (sem senha)
      setUser(sanitizeUser(foundUser));

      return {
        success: true,
        token,
        user: sanitizeUser(foundUser)
      };

    } catch (error) {
      console.error('Erro no login:', error);
      return { success: false, message: 'Erro interno do servidor' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('app_session');
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Erro no logout:', error);
      return { success: false, message: 'Erro ao fazer logout' };
    }
  };

  // verifica se o usuário está autenticado
  const isAuthenticated = () => {
    const session = getSession();
    return !!session && !!session.token;
  };

  // renova a sessão (estende o tempo de expiração)
  const renewSession = () => {
    if (user) {
      createSession(user);
      return true;
    }
    return false;
  };

  // deleta a conta do usuário atual
  const deleteAccount = () => {
    if (!user) {
      return { success: false, message: 'Nenhum usuário logado' };
    }

    try {
      // remove usuário do localStorage
      deleteUser(user.id);
      
      // remove sessão
      localStorage.removeItem('app_session');
      
      // limpa estado do usuário
      setUser(null);
      
      return { success: true, message: 'Conta deletada com sucesso' };
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      return { success: false, message: 'Erro ao deletar conta' };
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoading,
      isAuthenticated,
      renewSession,
      deleteAccount
    }}>
      {children}
    </AuthContext.Provider>
  );
}