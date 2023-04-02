import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies" state={{ from: location }}>
            Movies
          </StyledLink>
        </nav>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
