import Image from 'next/image';
import Link from 'next/link';

import PanelImage from '../../images/image-painel.png';

function Panel() {
  return (
    <div className='flex items-center justify-between w-full h-[calc(100vh-96px)] md:justify-center'>
      <div className='flex flex-col w-[400px] md:items-center '>
        <h1 className='text-6xl font-black leading-[77px] mb-7 sm:text-center'>
          Bem vindo ao projeto Horta
        </h1>
        <span className='text-2xl mb-11 sm:text-center'>
          Encontre as hortas comunitárias da sua cidade 🌱
        </span>
        <Link href='#second-section'>
          <button className='transition w-80 h-12 rounded-2xl cursor-pointer text-white bg-green hover:bg-[#3b8a85]'>
            Conhecer Hortas
          </button>
        </Link>
      </div>
      <div className='md:hidden'>
        <Image
          src={PanelImage}
          alt='Cartoon de uma mulher cuidando de flores em um vaso'
        />
      </div>
    </div>
  );
}

export default Panel;
