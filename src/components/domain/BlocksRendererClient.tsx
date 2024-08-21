'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

const BlocksRendererClient = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      blocks={{
        paragraph: ({ children }) => <p className="text">{children}</p>,
      }}
      content={content}
    />
  );
};

export default BlocksRendererClient;
