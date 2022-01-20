import { useState, useEffect } from 'react';
import Link from 'next/link'

import { Button } from '../components/Button'

import { BodyContainer, HomeContainer } from './index.styles';

import { Navbar } from '../components/Navbar'

function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  useEffect(
    () => {
      console.log(count);
    },
    [count]
  )

  return (
    <BodyContainer>
      <Navbar class='navbar'>
        <h2 style={{ paddingRight: '90%', color: 'white' }}>Home</h2>
        <Link href="/login" passHref>
          <Button type="button" style={{ marginTop: '1rem', width: '100px' }}>
            Sign out
          </Button>
        </Link>
      </Navbar>
      <HomeContainer>
        <h1>Hello Products Next</h1>

        <span>Counter: {count}</span>

        <Button type="button" onClick={increment}>
          Click Me
        </Button>

      </HomeContainer>
    </BodyContainer>
  )
}

export default Home;