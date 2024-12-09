import { Room } from "./types/types";

export const testRooms: Room[] = [
  {
    roomNumber: 221,
    roomType: "OTP",
    cleaningType: "OUT-IN",

    isKeyBack: false,
    isCleaningComplete: true,
    stayCleaningType: null,

    nowBeds: 3,
    newBeds: 3,
    adult: 3,
    inf: 3,
    kidInf: 3,

    memo: "memo",
  },
  {
    roomNumber: 223,
    roomType: "OTP",
    cleaningType: "NONE",

    isKeyBack: true,
    isCleaningComplete: true,
    stayCleaningType: null,

    nowBeds: 2,
    newBeds: 2,
    adult: 2,
    inf: 2,
    kidInf: 2,

    memo: "memomemo",
  },
  {
    roomNumber: 224,
    roomType: "MTP",
    cleaningType: "IN",

    isKeyBack: true,
    isCleaningComplete: false,
    stayCleaningType: null,

    nowBeds: 1,
    newBeds: 2,
    adult: 1,
    inf: 1,
    kidInf: 1,

    memo: "memomemomemo",
  },
];
