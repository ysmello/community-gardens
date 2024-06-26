import Image from 'next/image';

import logo from '../../images/horta-white.png';

function Footer() {
  return (
    <div className='flex items-center w-full h-28 bg-green p-5'>
      <div className='container flex justify-between w-[1160px]'>
        <Image src={logo} alt='Logo Horta' />
        <span className='text-white text-base'>2024</span>
      </div>
    </div>
  );
}

export default Footer;
