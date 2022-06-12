import type { NextPage } from 'next';
import Container from '../components/Container';
import Footer from '../components/Footer';
import GardensList from '../components/GardensList';
import Header from '../components/Header';
import Panel from '../components/Panel';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Panel />
        <GardensList />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
