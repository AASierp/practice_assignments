"use client"

import React, { createContext, useContext, useState } from "react";
import type { User } from "@/types/types";


type userContextType = {
    user: User | null
    setUser: (user: User | null) => void
}

const UserContext = createContext<userContextType | null>(null);

export function UserProvider( { children }: {children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider value= {{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must be provided inside UserProvider.");
    }

    return context;
}

