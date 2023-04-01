import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
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
