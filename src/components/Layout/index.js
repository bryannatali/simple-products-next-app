import { useAuth } from "../../contexts/AuthContext";

import { Navbar } from "../Navbar";

import { LayoutContainer } from "./styles";

export function Layout({ children }) {
  const { isAuthenticated } = useAuth();

  return (
    <LayoutContainer>
      {isAuthenticated && (
        <Navbar pageTitle="Home" />
      )}

      {children}
    </LayoutContainer>
  )
}