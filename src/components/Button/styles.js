import styled from 'styled-components'

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: #4d42b0;
  color: #fff;
  padding: 0.75rem;
  border-radius: 4px;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`