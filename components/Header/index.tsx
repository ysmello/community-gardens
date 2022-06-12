import Image from 'next/image';
import logo from '../../images/horta.png';

function Header() {
  return (
    <div className='flex items-end justify-between h-24'>
      <Image src={logo} alt='Horta' />
      <a
        target='_blank'
        href={
          'https://wa.me/5541988769165?text=Olá,%20gostaria%20de%20cadastrar%20minha%20horta!'
        }
        className='p-2 text-green underline cursor-pointer'
        rel='noreferrer'
      >
        Cadastrar minha horta
      </a>
    </div>
  );
}

export default Header;
