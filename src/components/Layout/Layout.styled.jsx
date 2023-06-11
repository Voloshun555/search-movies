import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;

  &.active {
    color: white;
    background-color: #605d5d;
    :hover {
      background-color: #0e3ab0c4;
    }
  }
  :hover:not(.active) {
    color: #605d5d;
  }
`;
