import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: 1px solid grey;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 15px;
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
