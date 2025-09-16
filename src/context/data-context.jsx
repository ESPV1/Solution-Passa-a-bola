import { createContext, useEffect, useState } from "react";
import usersData from "@/data/json/users.json";
import quadrasData from "@/data/json/quadras.json";
import axios from "axios"

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [quadras, setQuadras] = useState([]);

  useEffect(() => {
    // executa apenas uma vez na inicialização da aplicação
    if (!isInitialized) {
      initializeData();
      initializeQuadras();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const ceps = [
    '05160030', // Vila Madalena - SP
    '01310100', // Paulista - SP  
    '04038001', // Vila Olímpia - SP
    '03150000', // Mooca - SP
    '02070000', // Santana - SP
    '01415000', // Jardins - SP (extra para segurança)
    '05407002'  // Pinheiros - SP (extra para segurança)
  ];

  const initializeQuadras = async () => {
    try {
      // busca endereços completos via ViaCEP
      const addresses = await Promise.all(quadrasData.map(async (quadraOriginal, index) => {
        // Verifica se existe CEP para este índice
        const cep = ceps[index];

        if (!cep) {
          // se não há CEP para este índice, retorna dados originais
          console.log(`Nenhum CEP disponível para quadra ${index}, usando dados originais`);
          return quadraOriginal;
        }

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const { logradouro, localidade, cep: cepResponse, bairro } = res.data;

          // verifica se a API retornou dados válidos
          if (!logradouro || res.data.erro) {
            console.log(`CEP ${cep} inválido, usando dados originais para quadra ${index}`);
            return quadraOriginal;
          }

          return {
            ...quadraOriginal,
            endereco: `${logradouro}, ${bairro} - ${localidade}`,
            cep: cepResponse,
            logradouro,
            bairro,
            localidade
          };
        } catch (error) {
          console.log(`Erro ao buscar CEP ${cep} para quadra ${index}:`, error);
          // retorna dados do JSON original em caso de erro
          return quadraOriginal;
        }
      }));

      setQuadras(addresses);
      console.log("Quadras inicializadas com endereços completos:", addresses);
    } catch (error) {
      console.log("Erro ao inicializar quadras:", error);
      // fallback para dados originais
      setQuadras(quadrasData);
    }
  };

  const getQuadras = () => {
    return quadras;
  };

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
      deleteUser,
      getQuadras,
      quadras
    }}>
      {children}
    </DataContext.Provider>
  );
}