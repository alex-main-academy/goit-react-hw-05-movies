import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;
  transition-duration: 300ms;

  &.active {
    background-color: white;
    color: black;
  }

  :hover:not(.active) {
    color: rgb(224, 224, 224);
  }
`;

export default StyledLink;
