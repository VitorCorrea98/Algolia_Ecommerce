/* eslint-disable max-lines-per-function */

import { PrismaClient } from '@prisma/client';
import { products } from './produtcs/produtcsSeed';

const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.users.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'alice_secreta',
    },
  });
  const produtos = products.forEach(async (product) => prisma.products.upsert({
      where: product,
      update: product,
      create: product,
    }));
  console.log({ alice, produtos });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });