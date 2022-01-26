import styled from 'styled-components';

import { shade } from 'polished';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 75vh;

  padding: 2rem;
  .register-button{
    font-size: 20px;
    margin: 2rem;
    padding: 1rem;
    background: linear-gradient(#008024, ${shade(0.2, '#008024')});
  }
`
export const BodyContainer = styled.div`

`

export const ProductsList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  li {
    display: flex;
    flex-direction: column;

    cursor: pointer;

    background: #ddd;
    padding: 1rem;
    border-radius: 4px;

    transition: filter .2s ease;

    .price {
      margin-top: 1rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`