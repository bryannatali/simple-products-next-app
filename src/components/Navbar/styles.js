import { shade } from 'polished'

import styled from 'styled-components'

export const StyledNavbar = styled.div`
  width: 100%;
  height: 90px;

  padding: 0 1rem;
  background: linear-gradient(#3d2cdb, ${shade(0.2, '#3d2cdb')});

  display: flex;
  align-items: center;
  justify-content: space-between;

  &#home{
    float: left;
  }
`