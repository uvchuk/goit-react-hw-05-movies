import { Link, Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
