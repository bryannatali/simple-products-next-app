import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 75vh;

  padding: 2rem;
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