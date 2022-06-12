interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className='container max-w-[1160px]'>{children}</div>;
}

export default Container;
