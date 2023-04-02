import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  position: absolute;
  padding: 10px;
  background-color: aliceblue;
  text-decoration: none;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  gap: 15px;
`;
