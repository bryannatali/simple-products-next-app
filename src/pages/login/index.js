import Link from "next/link"

import { Button } from '../../components/Button'

import { Input } from '../../components/Input'

import { LoginContainer } from "./styles"


export default function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <h2>Insira seu usuário</h2>
      <Input type="text"></Input>
      <h2>Insira sua senha</h2>
      <Input type="text"></Input>
      
      <Link href="/" passHref>
        <Button type="button">
          Sign In
        </Button>
      </Link>

    </LoginContainer>
  )
}