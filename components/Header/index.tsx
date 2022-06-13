import Image from 'next/image';
import logo from '../../images/horta.png';

interface HeaderProps {
  showLink: Boolean;
  href: string;
  linkText: string;
  target: string;
}

function Header({ showLink, href, linkText, target }: HeaderProps) {
  return (
    <div className='flex items-end justify-between h-24'>
      <Image src={logo} alt='Horta' />
      {showLink && (
        <a
          target={target}
          href={href}
          className='text-green underline cursor-pointer'
          rel='noreferrer'
        >
          {linkText}
        </a>
      )}
    </div>
  );
}

export default Header;
