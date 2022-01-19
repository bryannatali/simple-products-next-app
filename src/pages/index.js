import { useState, useEffect } from 'react';
import Link from 'next/link'

import { Button } from '../components/Button'

import { HomeContainer } from './index.styles';

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
    <HomeContainer>
      <h1>Hello Products Next</h1>

      <span>Counter: {count}</span>

      <Button type="button" onClick={increment}>
        Click Me
      </Button>
      <Link href="/login" passHref>
        <Button type="button" style={{ marginTop: '1rem' }}>
          Log out
        </Button>
      </Link>
    </HomeContainer>
  )
}

export default Home;