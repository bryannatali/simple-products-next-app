import { StyledButton } from "./styles"

export function Button({ type, onClick, children, ...rest }) {
  return (
    <StyledButton type={type} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}
