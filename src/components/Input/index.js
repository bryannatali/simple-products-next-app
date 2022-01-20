import { StyledInput } from "./styles"

export function Input({ type, children, ...rest }) {
  return (
    <StyledInput type={type} {...rest}>
      {children}
    </StyledInput>
  )
}