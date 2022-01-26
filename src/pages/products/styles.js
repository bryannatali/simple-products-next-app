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
  .name-input{
    width: 100%;
    margin: 0;
  }
  .delete-button{
    background: linear-gradient(#b80c00, ${shade(0.2, '#b80c00')});
  }
`