import Image from 'next/image';

import logo from '../../images/horta-white.png';

function Footer() {
  return (
    <div className='flex items-center w-full h-28 bg-green'>
      <div className='container flex justify-between mx-w-md'>
        <Image src={logo} alt='Logo Horta' />
        <span className='text-white text-base'>2022</span>
      </div>
    </div>
  );
}

export default Footer;
