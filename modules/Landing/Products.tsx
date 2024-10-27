import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const serviceList = [
  {
    title: 'ПАУКВЛС',
    description:
      'ПАУКВЛС (программа автоматического учёта кормов и ветеринарных лекарственных средств) — это продукт, отвечающий за ведение учёта ветеринарных препаратов и других средств для животных, а также электронного документооборота между дистрибьютерами и ветеринарными учреждениями.',
    description2:
      'В ходе анализа рынка ветеринарных предприятий было выявлено техническое отставание в области программного обеспечения, так как программа 1С со слов опрашиваемых представителей фирм и клиник, не является интуитивно понятной и требует дополнительных ресурсов для персонализации. ПАУКВЛС этопродукт, который будет более доступен пользователю, как в оформлении, так и по стоимости. Помимо этого, программа будет иметь дополнительный функционал по ведению электронного документооборота и станет подготовительным звеном в переходе предприятий на современные виды маркировок, в том числе DataMatrix кодов. В целом, продукт будет модульным и иметь функционал по считыванию штрих-кодов, современных маркировок, ведению электронной документации и подсчета остатка товара, одним из главных преимуществ станет наличие актуального справочника по ветеринарным препаратам. В будущем команда намерена расширять функционал продукта, а именно добавить модуль по работе с кассовым оборудованием, ведению кассовой документации, модуль заказа лекарственных препаратов у дистрибьютеров (для ветеринарных клиник) и модуль ценообразования.',
    description3:
      'ПАУКВЛС (программа автоматического учёта кормов и ветеринарных лекарственных средств) — это продукт, отвечающий за ведение учёта ветеринарных препаратов и других средств для животных, а также электронного документооборота между дистрибьютерами и ветеринарными учреждениями.',
    srclogo: '/image/Partners logo/Logo3.png',
    srcimage1: '/image/Project image/photo_2024-08-31_13-59-05.png',
    srcimage2: '/image/Project image/photo_2024-08-31_13-59-05.png',
    srcimage3: '/image/Project image/photo_2024-08-31_13-59-05.png',
  },
];

const serviceList2 = [
  {
    title: 'VET IN',
    description:
      'Продукт, «VeT IN», является современным методом агрегации и структурирование информации, который обеспечивает оперативное получение и освоение различных материалов с неограниченной воспроизводимостью и возможностью дистанционного обучения. Предполагается сбор, структурирование и последующее предоставление пользователям различных экспериментальных, исследовательских данных, т.е. данные, на основе которых можно будет осуществлять научные изыскания, а также использовать их в учебном процессе. Например, данные медицинских обследований или анализы, которые часто требуются при написании научных работ, но их трудно получить, так как они часто находятся в разных руках. Для этого планируется заключить договоренность с различными клиниками и иными структурами, которые имеют в своих руках подобные сведения.  Помимо этого, программа будет отличаться предоставлением возможности общения между специалистами посредством «чата», что позволит обмениваться информацией непосредственно в режиме «онлайн» без разглашения личных данных',
    description2:
      'Главная особенность продукта - это аккумулирование актуальной структурированной практической информации. Данное преимущество будет достигнуто путем предоставления специалистам доступа к добавлению данных из личной практики (фото-, видео- материалы, описание симптоматики и тд), что сделает базу данных с практическими исследованиями, а также образовательный контент более полным, наглядным и реальным. Программа предполагает аналог чатов, как на сторонних ресурсах, что позволит вести беседу со специалистами, сохраняя конфиденциальность личных данных. Кроме того, ведение подобного новшества позволит отследить заболеваемость в регионе, составить статистику и план мероприятия для предотвращения распространения недугов, а также использовать для новых научных исследований широкий спектр диагностических данных.',
    description3:
      'На данный момент в нашей стране не существует подобных открытых источников, содержащих большое количество диагностических данных и результатов обследований, на этом основании часто тормозятся научные исследования, которые особо актуальны в настоящие время импортозамещения в области АПК, а также на первый план выходит обучение высококвалифицированных специалистов в разных областях АПК.  Мы предлагаем систему, которая даст возможность аккумулировать большие массивы достоверных научных данных, предоставляющих возможность для научных исследований и обучения на их основе. Система даст возможность проводить обучающие курсы на современном высокоразвитом цифровом уровне, в онлайн формате, как в синхронном, так и в асинхронном виде.Кроме выше сказанного, планируется упрощение взаимодействия между специалистами, у которых не всегда бывает возможно из-за отсутствия контактов. Проект цифровой среды поможет сделать сотрудничество более динамичным, оперативным и удобным за счет расширения функционала методами телемедицины',
    srclogo: '/image/Partners logo/Logo3.png',
    srcimage1: '/image/Project image/photo_2024-08-31_13-59-05.png',
    srcimage2: '/image/Project image/photo_2024-08-31_13-59-05.png',
    srcimage3: '/image/Project image/photo_2024-08-31_13-59-05.png',
  },
];

export const Products = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Наши{' '}
          <span className='bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>
            продукты
          </span>
        </h2>
        <p className='text-muted-foreground text-lg mt-4'>
          Откройте для себя наши инновационные продукты, созданные для оптимизации процессов и упрощения взаимодействия.
        </p>
      </div>

      <div className='grid gap-24'>
        {serviceList.map(({ title, description, description2, description3, srclogo, srcimage1, srcimage2, srcimage3 }) => (
          <Card key={title} className='flex shadow-none bg-transparent' style={{ border: 'none', background: 'none' }}>
            {/* Левая часть */}
            <div className='left w-1/2 flex flex-col justify-start p-4'>
              <Image src={srclogo} alt={`${title} logo`} width={70} height={70} className='rounded-full' />
              <CardHeader className='space-y-6 mt-2'>
                <CardTitle className='text-5xl bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>{title}</CardTitle>
                <CardDescription className='text-md mt-2'>{description}</CardDescription>
                <CardDescription className='text-md mt-2'>{description2}</CardDescription>
                <CardDescription className='text-md mt-2'>{description3}</CardDescription>
              </CardHeader>
            </div>

            {/* Правая часть */}
            <div className='text-5xlright w-1/2 flex flex-col items-center space-y-6'>
              <Image src={srcimage1} alt={`${title} project`} width={800} height={800} className="rounded-md" />
              <Image src={srcimage2} alt={`${title} project`} width={800} height={800} className="rounded-md" />
              <Image src={srcimage3} alt={`${title} project`} width={800} height={800} className="rounded-md" />
            </div>
          </Card>
        ))}

        {serviceList2.map(({ title, description, description2, description3, srclogo, srcimage1, srcimage2, srcimage3 }) => (
          <Card key={title} className='flex shadow-none bg-transparent' style={{ border: 'none', background: 'none' }}>
            {/* Правая часть */}
            <div className='right w-1/2 flex flex-col items-center space-y-6'>
              <Image src={srcimage1} alt={`${title} project`} width={800} height={800} className="rounded-md" />
              <Image src={srcimage2} alt={`${title} project`} width={800} height={800} className="rounded-md" />
              <Image src={srcimage3} alt={`${title} project`} width={800} height={800} className="rounded-md" />
            </div>

            {/* Левая часть */}
            <div className='left w-1/2 flex flex-col justify-start p-4'>
              <Image src={srclogo} alt={`${title} logo`} width={70} height={70} className='rounded-full' />
              <CardHeader className='space-y-6 mt-2'>
                <CardTitle className='text-5xl bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>{title}</CardTitle>
                <CardDescription className='text-md mt-2'>{description}</CardDescription>
                <CardDescription className='text-md mt-2'>{description2}</CardDescription>
                <CardDescription className='text-md mt-2'>{description3}</CardDescription>
              </CardHeader>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
