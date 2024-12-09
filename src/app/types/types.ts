export interface Room {
  roomNumber: number;

  roomType: string;

  cleaningType: string;

  isKeyBack: boolean;

  outCleaningComplete: boolean;
  inCleaningComplete: boolean;
  stayCleaningComplete: boolean;
  noneCleaningComplete: boolean;

  stayCleaningType: string | null;

  nowBeds: number;
  newBeds: number;
  adult: number;
  inf: number;
  kidInf: number;

  memo: string;
}
