import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// db接続
export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

// 1階の部屋取得API
export const GET = async () => {
  try {
    await main();
    const rooms_1f = await prisma.rooms1f.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json({ message: "Success", rooms_1f }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
