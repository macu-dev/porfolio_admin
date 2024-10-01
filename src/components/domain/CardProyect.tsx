import { BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import BlocksRendererClient from './BlocksRendererClient';

interface CardProyectProps {
  title: string;
  description?: BlocksContent;
}

const CardProyect = ({ title, description }: CardProyectProps) => {
  return (
    <Card className="w-[100%]">
      <Image
        alt=""
        height={100}
        src="https://picsum.photos/200/"
        style={{ objectFit: 'cover', width: '100%', height: '250px' }}
        width={200}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && (
          <CardDescription>
            <BlocksRendererClient content={description} />
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p>sds</p>
      </CardContent>
      <CardFooter className="flex justify-between">vee</CardFooter>
    </Card>
  );
};

export default CardProyect;
