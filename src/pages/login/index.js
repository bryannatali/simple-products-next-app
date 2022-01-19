import Link from "next/link"

import { Button } from '../../components/Button'

import { LoginContainer } from "./styles"


export default function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <Link href="/" passHref>
        <Button type="button">
          Log In
        </Button>
      </Link>

    </LoginContainer>
  )
}