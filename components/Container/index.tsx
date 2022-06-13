interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className='container max-w-[1200px] pl-5 pr-5'>{children}</div>;
}

export default Container;
