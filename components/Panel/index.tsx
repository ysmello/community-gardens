import Image from 'next/image';

import PanelImage from '../../images/image-painel.png';

function Panel() {
  return (
    <div className='flex items-center justify-between w-full h-[calc(100vh-96px)]'>
      <div className='flex flex-col w-[400px]'>
        <h1 className='text-6xl font-black leading-[77px] mb-7'>
          Bem vindo ao projeto Horta
        </h1>
        <span className='text-2xl mb-11'>
          Encontre as hortas comunitárias da sua cidade 🌱
        </span>
        <button className='transition w-80 h-12 rounded-2xl cursor-pointer text-white bg-green hover:brightness-50'>
          Conhecer Hortas
        </button>
      </div>
      <div>
        <Image
          src={PanelImage}
          alt='Cartoon de uma mulher cuidando de flores em um vaso'
        />
      </div>
    </div>
  );
}

export default Panel;
