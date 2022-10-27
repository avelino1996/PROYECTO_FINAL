import React, { useContext, createContext } from "react"

export const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext);

