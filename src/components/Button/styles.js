import { shade } from 'polished'

import styled from 'styled-components'

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(#3d2cdb, ${shade(0.2, '#3d2cdb')});
  color: #fff;
  padding: 0.75rem;
  border-radius: 4px;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`