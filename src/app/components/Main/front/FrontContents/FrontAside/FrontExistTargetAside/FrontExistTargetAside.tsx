"use client";

import { Room } from "@/app/types/types";
import styles from "../FrontAside.module.css";
import { useState } from "react";

interface Props {
  rooms: Room[] | null;
  setRooms: React.Dispatch<React.SetStateAction<Room[] | null>>;
  targetRoom: Room;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontExistTargetAside = ({
  rooms,
  setRooms,
  targetRoom,
  setTargetRoom,
}: Props) => {
  // options
  const cleaningTypeOptions = ["OUT", "IN", "OUT-IN", "STAY", "NONE"];
  const bedsOptions = [1, 2, 3, 4];
  const guestOptions = [0, 1, 2, 3, 4, 5];
  const objOptions = [
    { value: 0, text: "false" },
    { value: 1, text: "true" },
  ];

  // オプションを作る関数（cleaningType,beds,guests用）
  const createObjOptions = (
    targetOptions: {
      value: number;
      text: string;
    }[]
  ) => {
    return targetOptions.map((option: { value: number; text: string }) => (
      <option value={option.value} key={option.value}>
        {option.text}
      </option>
    ));
  };

  // オプションを作る関数（key,isCleaningComplete用）
  const createOptions = (targetOptions: string[] | number[]) => {
    return targetOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  // 新しいroomsを作る関数
  const createNewRooms = () => {
    const _noRemakeRooms = rooms!.filter((room) => {
      return room!.roomNumber !== newRoom.roomNumber;
    });
    const _newRooms = [..._noRemakeRooms, newRoom];
    return _newRooms.sort((a, b) => a.roomNumber - b.roomNumber);
  };

  // state
  const [cleaningType, setCleaningType] = useState<string>(
    targetRoom.cleaningType
  );
  const [isKeyBack, setIsKeyBack] = useState<number>(
    Number(targetRoom.isKeyBack)
  );
  const [nowBeds, setNowBeds] = useState<number>(targetRoom.nowBeds);
  const [newBeds, setNewBeds] = useState<number>(targetRoom.newBeds);
  const [adult, setAdult] = useState<number>(targetRoom.adult);
  const [inf, setInf] = useState<number>(targetRoom.inf);
  const [kidInf, setKidInf] = useState<number>(targetRoom.kidInf);
  const [isCleaningComplete, setIsCleaningComplete] = useState<number>(
    Number(targetRoom.isCleaningComplete)
  );
  const [memo, setMemo] = useState<string>(targetRoom.memo);

  // formに入力された値で新しくroomを作る
  const newRoom: Room = {
    ...targetRoom,
    cleaningType: cleaningType,
    isKeyBack: Boolean(isKeyBack),
    nowBeds: nowBeds,
    newBeds: newBeds,
    adult: adult,
    inf: inf,
    kidInf: kidInf,
    isCleaningComplete: Boolean(isCleaningComplete),
    memo: memo,
  };

  // submit時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRooms(createNewRooms());
    setTargetRoom(null);
  };

  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>{`${targetRoom.roomNumber}の編集`}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.edit_item_container}>
          {/* cleaningType */}
          <div className={styles.edit_item}>
            <label htmlFor="cleaningType">cleaningType</label>
            <select
              id="cleaningType"
              defaultValue={cleaningType}
              key={cleaningType}
              onChange={(e) => setCleaningType(String(e.target.value))}
            >
              {createOptions(cleaningTypeOptions)}
            </select>
          </div>
          {/* isKeyBack */}
          <div className={styles.edit_item}>
            <label htmlFor="is_key_back">isKeyBack</label>
            <select
              id="is_key_back"
              defaultValue={Number(targetRoom.isKeyBack)}
              key={Number(targetRoom.isKeyBack)}
              onChange={(e) => setIsKeyBack(Number(e.target.value))}
            >
              {createObjOptions(objOptions)}
            </select>
          </div>
          {/* nowBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="now_beds">nowBeds</label>
            <select
              id="now_beds"
              defaultValue={targetRoom.nowBeds}
              key={targetRoom.nowBeds}
              onChange={(e) => setNowBeds(Number(e.target.value))}
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* newBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="new_beds">newBeds</label>
            <select
              id="new_beds"
              defaultValue={targetRoom.newBeds}
              key={targetRoom.newBeds}
              onChange={(e) => setNewBeds(Number(e.target.value))}
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* adult */}
          <div className={styles.edit_item}>
            <label htmlFor="adult">adult</label>
            <select
              id="adult"
              defaultValue={targetRoom.adult}
              key={targetRoom.adult}
              onChange={(e) => setAdult(Number(e.target.value))}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* inf */}
          <div className={styles.edit_item}>
            <label htmlFor="inf">inf</label>
            <select
              id="inf"
              defaultValue={targetRoom.inf}
              key={targetRoom.inf}
              onChange={(e) => setInf(Number(e.target.value))}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* kidInf */}
          <div className={styles.edit_item}>
            <label htmlFor="kid_inf">kidInf</label>
            <select
              id="kid_inf"
              defaultValue={targetRoom.kidInf}
              key={targetRoom.kidInf}
              onChange={(e) => setKidInf(Number(e.target.value))}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* isCleaningComplete */}
          <div className={styles.edit_item}>
            <label htmlFor="is_cleaning_complete">isCleaningComplete</label>
            <select
              id="is_cleaning_complete"
              defaultValue={Number(targetRoom.isCleaningComplete)}
              key={Number(targetRoom.isCleaningComplete)}
              onChange={(e) => setIsCleaningComplete(Number(e.target.value))}
            >
              {createObjOptions(objOptions)}
            </select>
          </div>
          {/* memo */}
          <div className={styles.edit_item}>
            <label htmlFor="memo">memo</label>
            <textarea
              id="memo"
              defaultValue={targetRoom.memo}
              key={targetRoom.memo}
              onChange={(e) => setMemo(String(e.target.value))}
            ></textarea>
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit">変更</button>
          <button onClick={() => setTargetRoom(null)}>キャンセル</button>
        </div>
      </form>
    </aside>
  );
};

export default FrontExistTargetAside;
