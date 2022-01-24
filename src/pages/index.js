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
            <h3>Monster Energy</h3> {/*Nome*/}
            <span>Surpreenda-se com a lata do energético mais animal do planeta.</span> {/*Descrição*/}
            <br />
            <span>Por apenas R$ 6,99</span> {/*Preço*/}
          </li>
          <br />
          <li>
            <h3>Redbull</h3> {/*Nome*/}
            <span>Se surpreenda com o energético mais energético do planeta. Redbull te da asas.</span> {/*Descrição*/}
            <br />
            <span>Por apenas R$ 7,09</span> {/*Preço*/}
          </li>
          <br />
          <li>
            <h3>Sprite</h3> {/*Nome*/}
            <span>O refrigerante que mata a sua sede com o melhor do sabor do limão.</span> {/*Descrição*/}
            <br />
            <span>Por apenas R$ 4,49</span> {/*Preço*/}
          </li>
          <br />
          <li>
            <h3>Skittles</h3> {/*Nome*/}
            <span>Há um mundo de sabores totalmente novo para você experimentar! Divirta-se!</span> {/*Descrição*/}
            <br />
            <span>Por apenas R$ 1,49</span> {/*Preço*/}
          </li>
          <br />
          <li>
            <h3>Refrigerante Água da Serra Framboesa</h3> {/*Nome*/}
            <span>Delicie-se com o refrescante sabor de framboesa.</span> {/*Descrição*/}
            <br />
            <span>Por apenas R$ 3,99</span> {/*Preço*/}
          </li>
          <br />
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