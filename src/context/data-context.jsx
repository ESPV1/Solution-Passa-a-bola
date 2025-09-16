import { createContext, useContext, useEffect, useState } from "react";
import usersData from "@/data/json/users.json";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // executa apenas uma vez na inicialização da aplicação
    if (!isInitialized) {
      initializeData();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const initializeData = () => {
    // verifica se já existem dados no localStorage
    const storedUsers = localStorage.getItem("users");
    
    if (!storedUsers) {
      // se não existir, carrega do JSON e salva no localStorage
      localStorage.setItem("users", JSON.stringify(usersData));
      console.log("Dados inicializados no localStorage");
    } else {
      console.log("Dados já existem no localStorage");
    }
  };

  const getUsers = () => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  // gera um ID aleatório único
  const generateRandomId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const addUser = (newUser) => {
    const users = getUsers();
    const updatedUsers = [...users, { ...newUser, id: generateRandomId() }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return updatedUsers;
  };

  const updateUser = (userId, updatedData) => {
    const users = getUsers();
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, ...updatedData } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return updatedUsers;
  };

  const deleteUser = (userId) => {
    const users = getUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return updatedUsers;
  };

  return (
    <DataContext.Provider value={{ 
      isInitialized, 
      getUsers, 
      addUser, 
      updateUser,
      deleteUser 
    }}>
      {children}
    </DataContext.Provider>
  );
}