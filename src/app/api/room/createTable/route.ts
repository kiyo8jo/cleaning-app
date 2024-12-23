import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ExcelData {
  id: number;
  type: string;
  cleaningType: string;
  inBeds: number;
  inAdult: number;
  inInf: number;
  nowBeds: number;
  inKidsInf: number;
}

const prisma = new PrismaClient();

// db接続
export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await main();
    await prisma.rooms1f.deleteMany({});
    await prisma.rooms2f.deleteMany({});

    const { newRooms1f, newRooms2f } = await req.json();

    await prisma.rooms1f.createMany({
      data: newRooms1f.map((data: ExcelData) => ({
        id: data.id,
        roomType: data.type,
        cleaningType: data.cleaningType,
        isKeyBack: false,
        isCleaningComplete: false,
        isWaitingCheck: false,
        stayCleaningType: "ECO",
        nowBeds: data.nowBeds,
        newBeds: data.inBeds,
        adult: data.inAdult,
        inf: data.inInf,
        kidInf: data.inKidsInf,
        memo: "",
      })),
    });

    await prisma.rooms2f.createMany({
      data: newRooms2f.map((data: ExcelData) => ({
        id: data.id,
        roomType: data.type,
        cleaningType: data.cleaningType,
        isKeyBack: false,
        isCleaningComplete: false,
        isWaitingCheck: false,
        stayCleaningType: "ECO",
        nowBeds: data.nowBeds,
        newBeds: data.inBeds,
        adult: data.inAdult,
        inf: data.inInf,
        kidInf: data.inKidsInf,
        memo: "",
      })),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
