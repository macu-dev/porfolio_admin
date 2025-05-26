'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

const BlocksRendererClient = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      blocks={{
        paragraph: ({ children }) => (
          <p className="text text-md  my-1 text-ring">{children}</p>
        ),
        list: ({ children }) => (
          <ul className="mt-2 list-disc pl-[16px]">{children}</ul>
        ),
        'list-item': ({ children }) => (
          <li className="pb-1 font-mono text-ring">{children}</li>
        ),
      }}
      content={content}
    />
  );
};

export default BlocksRendererClient;
