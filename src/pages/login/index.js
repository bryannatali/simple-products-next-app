import router from "next/router"
import { useState, useEffect } from "react"

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from "../../contexts/AuthContext"

import { LoginContainer } from "./styles"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  useEffect(
    () => {
      if (auth.user) {
        router.push('/')
      }
    },
    [auth.user]
  )

  function handleSignIn() {
    if (!username || !password) {
      return;
    }

    const user = { username, password }

    auth.signIn(user)

    // router.push('/')
  }

  if (auth.user) {
    return null;
  }

  return (
    <LoginContainer>
      <h1>Login</h1>

      <h2>Insira seu usuário</h2>
      <Input
        type="text"
        placeholder="Insira seu usuário"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <h2>Insira sua senha</h2>
      <Input
        type="password"
        placeholder="Insira sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button type="button" onClick={handleSignIn}>
        Sign In
      </Button>

    </LoginContainer>
  )
}