import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  padding: 5px 16px 8px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: rgb(6, 78, 138);

    :hover {
      background-color: #3470ff;
    }
  }
  :hover {
    color: #605d5d;
    background-color: rgb(6, 78, 138);
    color: white;
  }
`;
