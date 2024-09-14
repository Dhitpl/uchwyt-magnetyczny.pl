import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  prisma: PrismaClientSingleton | undefined
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
