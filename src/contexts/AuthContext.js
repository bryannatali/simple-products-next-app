import { createContext, useState, useContext, useEffect } from "react";

const localStorageUserKey = 'productsUser'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function signIn(userSignInData) {
    setUser(userSignInData);

    localStorage.setItem(localStorageUserKey, JSON.stringify(userSignInData));
  }

  function signOut() {
    setUser(null);

    localStorage.removeItem(localStorageUserKey);
  }

  useEffect(() => {
    const storagedUser = JSON.parse(localStorage.getItem(localStorageUserKey));

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