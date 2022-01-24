import { useState, useEffect } from 'react';
import router from 'next/router';

import { useAuth } from '../contexts/AuthContext'
import { fakeApi } from '../services/fakeApi';

import { Button } from '../components/Button'

import { BodyContainer, HomeContainer, ProductsList } from './index.styles';

export default function Home({ products }) {
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

        <ProductsList>
          {
            products.map(product => {
              return (
                <li key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
                  <h3>{product.name}</h3> {/*Nome*/}
                  <span className="description">{product.description}</span> {/*Descrição*/}
                  <span className="price">Por apenas R$ {product.price}</span> {/*Preço*/}
                </li>
              )
            })
          }
        </ProductsList>

        <span>Counter: {count}</span>

        <Button type="button" onClick={increment}>
          Click Me!
        </Button>
      </HomeContainer>
    </BodyContainer>
  )
}

export const getServerSideProps = async () => {
  const products = await fakeApi.getAllProducts();

  return {
    props: { products }
  }
}