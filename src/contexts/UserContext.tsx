import { useState, createContext, ReactNode } from 'react';

interface UserContextType {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;

}

export const UserContext = createContext<UserContextType>({
  nome: '',
  setNome: () => {}
});

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [nome, setNome] = useState('');


  return (
    <UserContext.Provider value={{ nome, setNome}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

//Em resumo esse componente tem como função construir um sistema de variavel global do tipo nome que pode ser utilizada e mudad em qualquer componente da aplicação.