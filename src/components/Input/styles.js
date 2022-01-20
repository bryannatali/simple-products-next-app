import styled from 'styled-components'
import { shade } from 'polished'

export const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  width: 15%;
  outline: 0;
  border: 2px solid #bfbfbf;
  border-radius: 4px;

  &:focus{
    border-color: ${shade(0.2, "#bfbfbf")};
  }
`