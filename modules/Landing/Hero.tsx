import { Button, buttonVariants } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className='container flex md:flex-row items-center'>
      {/* Text Section */}
      <div className='max-w-3xl text-left space-y-6 md:w-1/2'>
        <h1 className='text-5xl font-bold'>
          Разрабатываем индивидуальные решения для вашего бизнеса:{' '}
          <span className='inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>
            web-сайты, CRM-системы и мобильные приложения
          </span>{' '}
          под ваши задачи
        </h1>

        {/* Call to Action Buttons */}
        <div className='flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-4'>
          <Link href='#purchase-request'>
            <Button className='w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-white'>
              Обсудить проект
            </Button>
          </Link>
          <a
            rel='noreferrer noopener'
            href='#features'
            className={`w-full md:w-auto px-8 py-4 ${buttonVariants({
              variant: 'outline'
            })}`}
          >
            Узнать больше
            <ArrowDown className='ml-2 w-5 h-5' />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className='md:w-1/2'>
        <img
          src='/image/Right-column.png'
          alt='Right Column Image'
          className=' object-contain justify-center'
        />
      </div>
    </section>
  );
};
