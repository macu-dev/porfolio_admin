import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  const prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalThis = global as any;

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
