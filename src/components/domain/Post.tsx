/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */

import Article from './Article';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Buenas prácticas para escribir commits en Git',
      description:
        'Escribir buenos mensajes de commit es importante para que el histórico de tu proyecto sea legible, fácilmente escaneable y, claro, entendible por cualquier persona que participe en el proyecto.',
      cover: {
        url: '/proyects.png',
      },
      tags: {
        tag: [
          {
            id: 1,
            title: 'Tag 1',
            slug: 'tag-1',
          },
          {
            id: 2,
            title: 'Tag 2',
            slug: 'tag-2',
          },
          {
            id: 3,
            title: 'Tag 1',
            slug: 'tag-1',
          },
        ],
      },
    },
  ];

  return (
    <>
      <div className="px-3 pt-[1rem] sm:px-2 md:px-3 lg:px-9">
        {posts.map((post) => (
          <Article
            description={post.description}
            image={post.cover.url}
            key={post.id}
            tags={{ data: post.tags.tag }}
            title={post.title}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
