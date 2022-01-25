import { createContext, useState, useContext, useEffect } from "react";

const localStorageUserKey = 'productsUser'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function signIn(userSignInData) {
    setUser(userSignInData);

    const stringifiedUser = JSON.stringify(userSignInData) // Javascript to JSON

    localStorage.setItem(localStorageUserKey, stringifiedUser);
  }

  function signOut() {
    setUser(null);

    localStorage.removeItem(localStorageUserKey);
  }

  useEffect(() => {
    const jsonUser = localStorage.getItem(localStorageUserKey)

    const storagedUser = JSON.parse(jsonUser); // parse json to javascript

    if (storagedUser) {
      setUser(storagedUser);
    }

    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth() {
  const auth = useContext(AuthContext)

  return auth
}