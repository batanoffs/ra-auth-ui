import React, { createContext } from 'react'
import { AuthOptionsContextValue } from './AuthOptionsTypes'

const AuthOptionsContext = createContext<AuthOptionsContextValue>({
        profilePage: null,
        userMenuItems: [],
})

AuthOptionsContext.displayName = 'AuthOptionsContext'

type AuthOptionsContextProviderProps = {
    value: AuthOptionsContextValue
    children: React.ReactNode
}

const AuthOptionsContextProvider = ({
    value,
    children,
}: AuthOptionsContextProviderProps) => {
    return <AuthOptionsContext.Provider value={value}>{children}</AuthOptionsContext.Provider>
}

export { AuthOptionsContext, AuthOptionsContextProvider }


