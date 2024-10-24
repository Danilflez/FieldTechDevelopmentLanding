import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {GiftIcon, MapIcon, MedalIcon, PlaneIcon} from './Icons';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: 'Консультация с нашей поддержкой',
    description: 'Быстро изучим ваши пожелания и реализуем ваше приложение в кротчайшие сроки'
  },
  {
    icon: <MapIcon />,
    title: 'Оформление покупки',
    description: 'Заполните форму с вашими контактными данными и выберите удобный способ оплаты.'
  },
  {
    icon: <PlaneIcon />,
    title: 'Настройка приложения',
    description: 'Получите доступ к админ панели, настройте своё приложение.'
  },
  {
    icon: <GiftIcon />,
    title: 'Запуск и поддержка',
    description: 'Запускайте приложение и начните продажи. Мы всегда готовы помочь с поддержкой и настройками.'
  }
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container text-center py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Как это{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Работает, </span>
        Пошаговое руководство
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        Узнайте, как легко начать свой онлайн-бизнес с нашей поддержкой!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(({icon, title, description}: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
