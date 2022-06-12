interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className='container mx-md h-full'>{children}</div>;
}

export default Container;
