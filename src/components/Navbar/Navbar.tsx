import styled from 'styled-components'

export const NavbarItem = styled.a`
  background-color: #766b5e;
  color: #ece3cb;
  padding: .5rem;
  font-size: 2rem;
  display: flex;
  border-right: 1px solid #3a3530;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: none;
  }

  svg {
    vertical-align: middle;
  }
`

const Navbar = styled.nav`
  display: flex;
`

export default Navbar
