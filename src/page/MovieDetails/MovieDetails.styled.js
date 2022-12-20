import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: bold;
  padding: 7px 15px;
  font-size: 15px;
  color: black;
  border-radius: 10px;
  transition-duration: 300ms;

  &.active {
    background-color: rgb(28, 165, 190);
    color: white;
  }

  :hover:not(.active) {
    color: rgb(28, 165, 190);
  }
`;

export default StyledLink;
