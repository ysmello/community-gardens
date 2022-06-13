import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import Footer from '../components/Footer';
import GardensList from '../components/GardensList';
import Header from '../components/Header';
import Panel from '../components/Panel';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Horta</title>
        <link rel='shortcut icon' href='/favicon.png' type='image/png' />
      </Head>
      <Container>
        <Header
          showLink
          href={
            'https://wa.me/5541988769165?text=Olá,%20gostaria%20de%20cadastrar%20minha%20horta!'
          }
          target='_blank'
          linkText='Cadastrar minha horta'
        />
        <Panel />
        <GardensList />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
