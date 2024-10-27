import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
console.log(PreloaderImage);


const partners = [
  { src: '/image/Partners logo/Logo.png', alt: 'Logo 1' },
  { src: '/image/Partners logo/Logo2.png', alt: 'Logo 2' },
  { src: '/image/Partners logo/Logo3.png', alt: 'Logo 3' },
  // Добавьте больше логотипов по мере необходимости
];

export const Partner = () => {
  return (
    <section id='partner' className='container py-8'>
      <div className='flex justify-center items-center gap-20 rounded-lg py-4'>
        {partners.map((partner, index) => (
          <PreloaderImage
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={10} 
            height={10}
            className='w-10 h-10 object-contain w-1/3'
          />
        ))}
      </div>
    </section>
  );
};
