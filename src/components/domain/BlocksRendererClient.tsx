'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

const BlocksRendererClient = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      blocks={{
        paragraph: ({ children }) => (
          <p className="my-6 leading-[1.8] text-stone-300 max-[1024px]:my-3  max-[1024px]:text-[1.1rem] min-[768px]:text-[1.6rem] lg:max-w-xl lg:text-lg">
            {children}
          </p>
        ),
      }}
      content={content}
    />
  );
};

export default BlocksRendererClient;
