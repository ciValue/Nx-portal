import {createContext, FC, ReactNode, useState} from 'react';

type UserContext = {
  firstName: string;
  setFirstName: (arg0: string)=> void;
};

export const UserContext = createContext<UserContext>(
  {} as UserContext
);

interface UserProviderProps{
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({children}) => {
  const [firstName,setFirstName] = useState<string>('');

  return (
    <UserContext.Provider
      value={{firstName,setFirstName}} >
      {children}
    </UserContext.Provider>
  )

}
