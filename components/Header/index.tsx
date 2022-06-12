import Image from 'next/image';
import logo from '../../images/horta.png';

function Header() {
  return (
    <div className='flex items-end justify-between h-24'>
      <Image src={logo} alt='Horta' />
      <span className='p-2 text-green underline cursor-pointer'>
        Cadastrar minha horta
      </span>
    </div>
  );
}

export default Header;
