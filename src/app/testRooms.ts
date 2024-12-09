import { Room } from "./types/types";

export const testRooms: Room[] = [
  {
    roomNumber: 221,

    roomType: "OTP",

    cleaningType: "OUT-IN",

    isKeyBack: false,

    isCleaningComplete: true,
    // outCleaningComplete: false,
    // inCleaningComplete: false,
    // stayCleaningComplete: false,
    // noneCleaningComplete: false,

    stayCleaningType: null,

    nowBeds: 3,
    newBeds: 3,
    adult: 2,
    inf: 1,
    kidInf: 0,

    memo: "memo",
  },
  {
    roomNumber: 223,

    roomType: "OTP",

    cleaningType: "NONE",

    isKeyBack: true,

    isCleaningComplete: true,
    // outCleaningComplete: false,
    // inCleaningComplete: false,
    // stayCleaningComplete: false,
    // noneCleaningComplete: false,

    stayCleaningType: null,

    nowBeds: 3,
    newBeds: 3,
    adult: 2,
    inf: 1,
    kidInf: 0,

    memo: "memo",
  },
  {
    roomNumber: 224,

    roomType: "MTP",

    cleaningType: "OUT",

    isKeyBack: true,

    isCleaningComplete: false,

    // outCleaningComplete: false,
    // inCleaningComplete: false,
    // stayCleaningComplete: false,
    // noneCleaningComplete: false,

    stayCleaningType: null,

    nowBeds: 3,
    newBeds: 3,
    adult: 2,
    inf: 1,
    kidInf: 0,

    memo: "memo",
  },
];
