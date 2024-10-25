import { Statistics } from './Statistics';
import pilot from '@/src/assets/growth.png';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='bg-muted/50 border rounded-lg py-12'>
        <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <PreloaderImage src={pilot} alt='' className='w-[300px] object-contain rounded-lg' />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Мы{' '}
                <span className='inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>
                  FieldTech Development
                </span>
              </h2>
              <p className='text-xl text-muted-foreground mt-4'>
                Мы специализируемся на веб-разработке, создании мобильных приложений, заказной разработке ERP-систем и предоставлении выделенных команд (аутстаффинга). Наши решения помогают компаниям эффективно развиваться и масштабироваться, освобождая вас от необходимости погружаться в технические сложности. Мы берем на себя полный цикл разработки и сопровождения, чтобы вы могли сосредоточиться на управлении и росте вашего бизнеса.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
