import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const getPrismaInstance = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
};

export default getPrismaInstance;
