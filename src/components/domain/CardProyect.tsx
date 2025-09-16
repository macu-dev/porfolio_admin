import { BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import { Tecnology } from '@/services/api';

import './CardProyect.css';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

import BlocksRendererClient from './BlocksRendererClient';

interface CardProyectProps {
  title: string;
  description?: BlocksContent;
  image?: string;
  tecnologies: {
    data: Tecnology[];
  };
}

const CardProyect = ({
  title,
  description,
  tecnologies,
  image,
}: CardProyectProps) => {
  return (
    <Card className="w-[100%]">
      <CardHeader>
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-slate-400">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            />
          </div>
        )}

        <CardTitle className="p-6 pb-0 pt-3 text-xl">{title}</CardTitle>
        {description && (
          <div className="card-content-text px-6 pt-2">
            <BlocksRendererClient content={description} />
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-0">
        {tecnologies.data.map((tecnology) => (
          <Badge
            className="mx-1 bg-white/10 backdrop-blur-md"
            key={tecnology.id}
            variant="secondary"
          >
            <Image
              alt={tecnology.name}
              height={25}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${tecnology.icon.url}`}
              width={25}
            />
            {tecnology.name}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button className="p-0" variant="rainbow">
          <span className="inline-flex items-center justify-center bg-black p-2">
            <ExternalLinkIcon className="mr-1" />
            Ver demo
          </span>
        </Button>
        <Button className="tems-center inline-flex justify-center">
          <GitHubLogoIcon />
          Ver codigo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProyect;
