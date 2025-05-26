import { BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import { Tecnology } from '@/services/api';

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
          <div className="relative h-36 w-full overflow-hidden rounded-t-lg">
            <Image
              alt=""
              className="object-cover"
              fill // ocupa todo el contenedor
              priority
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            />
          </div>
        )}

        <CardTitle className="p-6">{title}</CardTitle>
        {description && (
          <div className="p-6 pt-2">
            <BlocksRendererClient content={description} />
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-0">
        {tecnologies.data.map((tecnology) => (
          <Badge className="mx-1" key={tecnology.id} variant="secondary">
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
          <span className="inline-flex bg-black p-2">
            <ExternalLinkIcon />
            Ver demo
          </span>
        </Button>
        <Button>
          <GitHubLogoIcon />
          Ver codigo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProyect;
