import type { NextPage } from 'next';
import Container from '../components/Container';
import Header from '../components/Header';
import Panel from '../components/Panel';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Panel />
    </Container>
  );
};

export default Home;
