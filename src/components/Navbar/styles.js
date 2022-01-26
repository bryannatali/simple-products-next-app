import { shade, lighten } from 'polished'

import styled from 'styled-components'

export const StyledNavbar = styled.div`
  width: 100%;
  height: 90px;

  padding: 0 1rem;
  background: linear-gradient(#3d2cdb, ${shade(0.2, '#3d2cdb')});

  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-logo,
  .sign-out-button{
    background: linear-gradient(${shade(0.2, '#3d2cdb')}, #3d2cdb);
    border-radius: 4px;
    padding: 1rem;
    cursor: pointer;
  }

  &#home{
    float: left;
  }
`