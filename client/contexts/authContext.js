import React, { Component, createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props)=>{

    const [isAdmin, setAdmin] = useState(true);

    const toggleAdmin = ()=>{
        console.log("Toggling")
        setAdmin(!isAdmin);
    }

    return(
        <AuthContext.Provider value={{isAdmin, toggleAdmin}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;