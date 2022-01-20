import Router from 'next/router';

import { useAuth } from '../../contexts/AuthContext';

import { Button } from '../Button';

import { StyledNavbar } from './styles'

export function Navbar({ className, pageTitle }) {
  const auth = useAuth();

  function handleSignOut() {
    auth.signOut();

    Router.push('/login');
  }

  return (
    <StyledNavbar className={className}>
      <h2 style={{ color: 'white' }}>{pageTitle}</h2>

      <Button
        type="button"
        style={{ width: '100px' }}
        onClick={handleSignOut}
      >
        Sign out
      </Button>
    </StyledNavbar>
  )
}