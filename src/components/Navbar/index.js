import { StyledNavbar } from './styles'

export function Navbar({Class, children, ...rest}){
  return(
    <StyledNavbar class={Class}>
      {children}
    </StyledNavbar>
  )
}