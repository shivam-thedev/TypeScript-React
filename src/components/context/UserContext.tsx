import { createContext, useState } from "react";

type UserContextProviderProp={
    children:React.ReactNode
}

type AuthUser ={
    name:string,
    email:string
}

type UserContextType={
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// export const UserContext=createContext<UserContextType | null >(null)
// This approach forces TypeScript to treat the initial value as an empty object but assumes it will be of type UserContextType.
export const UserContext=createContext({} as UserContextType)

export const UserContextProvider = ({children} : UserContextProviderProp) =>{
    const [user,setUser]=useState<AuthUser|null>(null)
    return (
        <UserContext.Provider value={{user,setUser}} > 
            {children}
        </UserContext.Provider>
    )
}