import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  // Ensure `banner` is a non-null string because the Prisma schema requires `banner` (non-nullable)
  const products = sampleData.products.map((p) => ({
    ...p,
    banner: p.banner ?? "",
  }));

  await prisma.product.createMany({ data: products });

  console.log("Data");
}

main();
