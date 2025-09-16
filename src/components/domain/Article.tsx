import Image from 'next/image';

import './CardProyect.css';

import { Tag } from '@/services/api';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface ArticleProps {
  title: string;
  description?: string;
  image?: string;
  tags: {
    data: Tag[];
  };
}

const Article = ({ title, description, tags, image }: ArticleProps) => {
  return (
    <Card className="w-[100%] overflow-hidden">
      <div className="flex flex-col md:h-48 md:flex-row">
        {image && (
          <div className="relative h-48 w-full flex-shrink-0 bg-slate-400 md:h-full md:w-64">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center">
          <CardHeader className="p-6 pb-2 pt-0">
            <CardTitle className="p-0 text-xl">{title}</CardTitle>
            {description && (
              <div className="card-content-text pt-2">{description}</div>
            )}
          </CardHeader>
          <CardContent className="px-6 pb-2 pt-0">
            {tags.data.map((tag) => (
              <Badge
                className="mx-1 bg-white/10 backdrop-blur-md"
                key={tag.id}
                variant="secondary"
              >
                {tag.title}
              </Badge>
            ))}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default Article;
