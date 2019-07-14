import styled from 'styled-components'

import {color} from '../../theme'

export const NavbarItem = styled.a`
  background-color: ${color('sandstone')};
  color: ${color('athsSpecial')};
  padding: .5rem;
  font-size: 2rem;
  display: flex;
  border-right: 1px solid ${color('merlin')};

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
