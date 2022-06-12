import Image, { StaticImageData } from 'next/image';

interface GalleryProps {
  photos: StaticImageData[] | undefined;
}

function Gallery({ photos }: GalleryProps) {
  return (
    <div className='flex flex-wrap gap-10 w-full columns-3 rounded-lg overflow-hidden mb-32'>
      {photos?.map((photo, index) => (
        <div
          key={index}
          className='w-[360px] h-64 relative rounded-lg overflow-hidden'
        >
          <Image
            className='w-[360px] aspect-square'
            src={photo}
            alt='Imagem da horta'
            layout='fill'
            objectFit='cover'
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
