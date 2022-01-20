import { useState, useEffect } from 'react';
import router from 'next/router';

import { useAuth } from '../contexts/AuthContext'

import { Button } from '../components/Button'

import { BodyContainer, HomeContainer } from './index.styles';

function Home() {
  const [count, setCount] = useState(0);

  const auth = useAuth();

  function increment() {
    setCount(count + 1);
  }

  useEffect(
    () => {
      console.log(count);
    },
    [count]
  )

  useEffect(
    () => {
      if (!auth.user) {
        router.push('/login');
      }
    },
    [auth.user]
  );
  if (!auth.user) return null

  return (
    <BodyContainer>
      <HomeContainer>
        <h1>Seja Bem-Vindo, {auth.user.username}</h1>

        <ul>
          <li>
            <h3>Produto 1</h3> {/*Nome*/}
            <span>O produto e top</span> {/*Descrição*/}
            <span>R$40,00</span> {/*Preço*/}
          </li>
        </ul>

        <span>Counter: {count}</span>

        <Button type="button" onClick={increment}>
          Click Me!
        </Button>

        <Button
          type="button"
          onClick={() => auth.setUser(auth.user === 'Greg' ? 'Bryan' : 'Greg')}
          style={{ marginTop: '1rem' }}
        >
          Trocar Usuário
        </Button>
      </HomeContainer>
    </BodyContainer>
  )
}

export default Home;