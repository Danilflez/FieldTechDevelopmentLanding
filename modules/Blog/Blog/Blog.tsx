'use client';

import React from 'react';
import Link from 'next/link';
import {useQuery} from 'react-query';
import Image from 'next/image'; // Используем Image компонент Next.js для оптимизации изображений
import parse from 'html-react-parser';
import {articles} from '../articles';

const Blog: React.FC = () => {
  // Получаем данные блогов с помощью useQuery

  // Обработка состояния загрузки и ошибок
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {articles.map((post: any) => {
          // Парсим изображение из строки JSON

          return (
            <div key={post.id} className='shadow-md rounded-lg overflow-hidden border'>
              {/* Изображение статьи */}
              <Image src={post.image} alt={post.title} width={400} height={200} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <div className='flex justify-between items-center text-gray-500 text-sm mb-2'>
                  {/* Здесь можно отобразить дату или категорию, если они есть */}
                  <span>Статья</span>
                </div>
                <h2 className='text-2xl font-bold mb-2'>
                  <Link href={`/blog?article=${post.id}`}>{post.title}</Link>
                </h2>
                {/* Обрезка текста подзаголовка и добавление троеточия */}
                {/* <p className='text-gray-700 mb-4 h-24 overflow-hidden line-clamp-3'>{parse(post.content)}</p> */}
                <Link
                  href={`/blog?article=${post.id}`}
                  className='inline-block mt-4 px-4 py-2 transition duration-300 ease-in-out'
                >
                  Подробнее
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;