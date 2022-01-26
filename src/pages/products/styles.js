import styled from "styled-components"

import { shade } from "polished"

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  height: calc(100vh - 90px);
`

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 50%;

  padding: 1rem;
  background: #ddd;
  border-radius: 4px;

  h2 {
    margin-top: 2rem;
  }

  strong {
    margin-top: 0.5rem;

    font-size: 1.5rem;

    align-self: flex-end;
  }
  .name-input,
  .description-input {
    width: 100%;
    margin: 0;
  }

  .description-input {
    margin-top: 2rem;
  }

  .price-input {
    align-self: flex-end;

    margin: 0;
    margin-top: 0.5rem;
  }

  .delete-button {
    margin-top: 1rem;
    
    background: linear-gradient(#b80c00, ${shade(0.2, '#b80c00')});
  }
`