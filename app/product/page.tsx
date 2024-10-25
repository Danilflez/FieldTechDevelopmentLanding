import React from 'react';
import { Navbar } from '@/modules/Landing/Navbar';

const projects = [
  { id: 1, title: 'Проект 1', description: 'Описание проекта 1' },
  { id: 2, title: 'Проект 2', description: 'Описание проекта 2' },
  { id: 3, title: 'Проект 3', description: 'Описание проекта 3' },
  // Добавьте другие проекты по необходимости
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Список всех проектов</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id} style={{ margin: '10px 0' }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}