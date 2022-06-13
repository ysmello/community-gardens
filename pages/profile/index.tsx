import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';

import HortaSanta1 from '../../images/horta-santa1.jpeg';
import HortaSanta2 from '../../images/horta-santa2.jpeg';
import HortaSanta3 from '../../images/horta-santa3.jpeg';
import HortaSanta4 from '../../images/horta-santa4.jpeg';
import HortaSanta5 from '../../images/horta-santa5.jpeg';

import HortiMundo1 from '../../images/horti-mundo1.jpeg';
import HortiMundo2 from '../../images/horti-mundo2.jpeg';
import HortiMundo3 from '../../images/horti-mundo3.jpeg';
import HortiMundo4 from '../../images/horti-mundo4.jpeg';
import HortiMundo5 from '../../images/horti-mundo5.jpeg';
import HortiMundo6 from '../../images/horti-mundo6.jpeg';

import HortaCajuru1 from '../../images/horta-cajuru1.jpeg';
import HortaCajuru2 from '../../images/horta-cajuru2.jpeg';
import HortaCajuru3 from '../../images/horta-cajuru3.jpeg';
import HortaCajuru4 from '../../images/horta-cajuru4.jpeg';
import HortaCajuru5 from '../../images/horta-cajuru5.jpeg';
import HortaCajuru6 from '../../images/horta-cajuru6.jpeg';

const profiles = [
  {
    id: 1,
    images: [HortaSanta1, HortaSanta2, HortaSanta3, HortaSanta4, HortaSanta5],
    name: 'Horta comunitária - AIC Santa Luiza Marillac',
    adress:
      'R. Baltazar Carrasco dos Reis, 1006 - Rebouças, Curitiba - PR, 80215-160',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.78509136231!2d-49.25759269999999!3d-25.445447500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce568036ee8c9%3A0x2992f0ef568ec6ab!2sHorta%20comunit%C3%A1ria%20-%20AIC%20Santa%20Luiza%20Marillac!5e0!3m2!1spt-BR!2sbr!4v1655071488248!5m2!1spt-BR!2sbr',
  },
  {
    id: 2,
    images: [
      HortiMundo1,
      HortiMundo2,
      HortiMundo3,
      HortiMundo4,
      HortiMundo5,
      HortiMundo6,
    ],
    name: 'Horti-Mundo',
    adress: 'Rua adelino leal nunes',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.626820133015!2d-49.28830128435903!3d-25.48413364127542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3582ded3105%3A0x4eaccf870af1ddf2!2sR.%20Adelino%20Leal%20Nunes%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081020-080!5e0!3m2!1spt-BR!2sbr!4v1655074068531!5m2!1spt-BR!2sbr',
  },
  {
    id: 3,
    images: [
      HortaCajuru1,
      HortaCajuru2,
      HortaCajuru3,
      HortaCajuru4,
      HortaCajuru5,
      HortaCajuru6,
    ],
    name: 'Horta Comunitária Cajuru',
    adress: 'Raymundov Nina Rodrigues, ao lado do número 668',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.766856022536!2d-49.217209684579764!3d-25.446056983780977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce56f32c861f9%3A0xc5af22cdfaab369f!2sRua%20Raymundo%20Nina%20Rodrigues%2C%20668%20-%20Cajuru%2C%20Curitiba%20-%20PR%2C%2082920-010!5e0!3m2!1spt-BR!2sbr!4v1655074269215!5m2!1spt-BR!2sbr',
  },
];

interface PhotosInterface {
  id: number;
  images: StaticImageData[];
  name: string;
  adress: string;
  mapSrc: string;
}

const Profile: NextPage = () => {
  const router = useRouter();

  function findProfileBy(
    id: string | string[] | undefined
  ): PhotosInterface | undefined {
    return profiles.find((profile) => profile.id === Number(id));
  }

  const profile = findProfileBy(router.query.id);

  return (
    <div>
      <Container>
        <Header
          showLink
          linkText='Voltar para página inicial'
          href='/.'
          target='_self'
        />

        <div className='font-black text-3xl mt-32 md:text-center'>
          Informações da Horta
        </div>

        <div className='flex flex-wrap md:flex-col gap-10 w-full mt-12 mb-16'>
          <div className='flex-1 md:text-center'>
            <div className='font-black text-2xl mb-6'>{profile?.name}</div>
            <div className='flex md:justify-center'>
              <span className='font-bold text-base ml-1'>
                Endereço:{' '}
                <span className='text-base ml-1 font-normal'>
                  {profile?.adress}
                </span>
              </span>
            </div>
          </div>
          <div className='flex-1'>
            <iframe
              src={profile?.mapSrc}
              width='100%'
              height='210'
              loading='lazy'
            ></iframe>
          </div>
        </div>

        <div className='font-black text-3xl mb-12 md:text-center'>Galeria</div>

        <Gallery photos={profile?.images} />

        <div className='flex justify-center mt-32 mb-32'>
          <a
            target='_self'
            href='/.'
            className='text-green underline ml-1'
            rel='noreferrer'
          >
            Voltar para página inicial
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Profile;
