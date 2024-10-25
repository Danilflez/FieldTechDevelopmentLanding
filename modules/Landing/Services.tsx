import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cubeLeg from '@/src/assets/cube-leg.png';
import Image from 'next/image';
import { ShoppingCart, Shield, DollarSign } from 'lucide-react'; // Importing icons from Lucide

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Веб-приложения и сайты',
    description:
      'Разработка современного сайта или веб-приложения требует слаженной команды и квалифицированных специалистов, мы в FieldTech Development уже более 15 лет занимаемся разработкой сайтов. Уже в далеком 2008 году мы одни из первых разработали собственную систему управления сайтами, на которой было реализовано более 300 проектов. На сегодняшний день мы работаем со всеми современными стеками технологий и фреймворками, внедряем множество CMS и подключаем любые базы данных к проекту. Наш опыт позволяет реализовывать проекты любого масштаба, от классических сайтов до высоконагруженных порталов.',
    icon: <ShoppingCart className='w-8 h-8 text-primary' />
  },
  {
    title: 'Карьерные порталы',
    description:
      'Современный дефицит кадров требует от компаний особого представления своих преимуществ перед соискателями, поэтому это очень сложно рассказать на корпоративном сайте компании или job-сервисах. Как раз по этой причине современные компании разрабатывают себе отдельные карьерные порталы, которые демонстрируют потенциальным сотрудникам все преимущества работы у них, показывают корпоративную жизнь, открытые вакансии, предоставляют возможность отклика на вакансии компании. Заказать разработку карьерного сайта вы можете в нашей компании, мы расскажем о всех нюансах и тонкостях разработки таких сайтов, поделимся опытом и кейсами.',
    icon: <Shield className='w-8 h-8 text-primary' />
  },
  {
    title: 'SaaS',
    description:
      'Мы занимаемся разработкой SaaS-сервисов и ИТ-продуктов, которыми пользуются миллионы людей по всему миру. SaaS-сервисы требуют особого подхода к разработке и специальную квалификацию проектной команды. За последние 15 лет мы разработали более 15 крупных проектов для собственной компании и внешних заказчиков. Накопленный нами опыт позволит избежать вам подводных камней и запустить проект в кратчайшие сроки. Разработка SaaS очень сильно отличается от классической разработки сайтов, поэтому требует специфического опыта и знаний.',
    icon: <DollarSign className='w-8 h-8 text-primary' />
  },
  {
    title: 'ERP',
    description:
      'ERP - это ит-продукт, который позволяет управлять ресурсами предприятия, это может быть производственная компания или бизнес из сферы услуг. ERP - это сложные высоконагруженные системы со множеством связей. Мы накопили большой опыт в разработке и построения таких систем, эффективность от которых измеряется сотнями миллионов рублей. Первую свою ERP-систему мы разработали для производства полиэтиленовых пакетов. Это был крупный проект для ведущего предприятия в Московской области, который был реализован в 2010 году. Эффективность от внедрения таких систем видна практически сразу, единственный минус ERP это срок их разработки, который может длиться более года.',
    icon: <DollarSign className='w-8 h-8 text-primary' />
  }
];

export const Services = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Какие{' '}
            <span className='bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>
              проекты
            </span>{' '}
            мы делаем
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8'></p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                  {/* <div className='mt-1 bg-primary/20 p-1 rounded-2xl'>{icon}</div> */}
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='text-md mt-2'>{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image src={cubeLeg} className='w-[300px] md:w-[500px] lg:w-[600px] object-contain' alt='About services' />
      </div>
    </section>
  );
};
