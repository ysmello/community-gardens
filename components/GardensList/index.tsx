import Image from 'next/image';

import HortSanta from '../../images/hote.jpeg';
import HortiMundo from '../../images/horti-mundo.jpeg';
import HortaCajuru from '../../images/horta-cajuru.jpeg';
import Pin from '../../images/pin.svg';
import Plant from '../../images/plant.svg';
import ArrowRight from '../../images/arrow-right.svg';
import Link from 'next/link';

function GardensList() {
  const gardens = [
    {
      id: 1,
      image: HortSanta,
      name: 'Santa Luisa de Marillac',
      type: 'Comunitária',
      adress: 'Rebouças',
    },
    {
      id: 2,
      image: HortiMundo,
      name: 'Horti-Mundo',
      type: 'Comunitária',
      adress: 'Novo Mundo',
    },
    {
      id: 3,
      image: HortaCajuru,
      name: 'Horta Cajuru',
      type: 'Comunitária',
      adress: 'Cajuru',
    },
  ];

  return (
    <div className='w-full mb-32' id='second-section'>
      <div className='mb-16'>
        <h2 className='font-black text-6xl md:text-center'>Hortas</h2>
      </div>
      <div className='flex flex-wrap gap-10 sm:justify-center md:justify-center'>
        {gardens.map((garden) => (
          <div
            key={garden.name}
            className='w-[360px] rounded-lg shadow-md overflow-hidden'
          >
            <div className='w-full h-[233px] overflow-hidden'>
              <Image src={garden.image} alt={garden.name} />
            </div>
            <div className='p-4'>
              <span className='font-black text-2xl'>{garden.name}</span>
              <div className='flex mt-4 mb-3'>
                <div className='w-3 flex items-center'>
                  <Image src={Pin} alt='Icone localização' />
                </div>

                <span className='font-bold text-base ml-1'>Bairro:</span>
                <span className='text-base ml-1'>{garden.adress}</span>
              </div>
              <div className='flex'>
                <div className='w-3 flex items-center'>
                  <Image src={Plant} alt='Icone Planta' />
                </div>

                <span className='font-bold text-base ml-1'>Tipo:</span>
                <span className='text-base ml-1'>{garden.type}</span>
              </div>
              <div className='flex justify-end'>
                <Link href={{ pathname: '/profile', query: { id: garden.id } }}>
                  <button className='flex items-center justify-center bg-green text-white w-10 h-10 rounded-lg transition hover:bg-[#3b8a85]'>
                    <Image src={ArrowRight} alt='Icone Seta direita' />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-32 text-center'>
        Ainda não tem sua horta cadastrada?
        <a
          target='_blank'
          href={
            'https://wa.me/5541988769165?text=Olá,%20gostaria%20de%20cadastrar%20minha%20horta!'
          }
          className='text-green underline ml-1'
          rel='noreferrer'
        >
          Cadastre agora!
        </a>
      </div>
    </div>
  );
}

export default GardensList;
