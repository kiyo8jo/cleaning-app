"use client";

import { useState } from "react";
import {
  bedsOptions,
  cleaningTypeOptions,
  createObjOptions,
  createOptions,
  guestOptions,
  objOptions,
  stayCleaningTypeOptions,
} from "./options";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTargetRoom } from "@/lib/features/targetRoom/targetRoomSlice";
import { Room } from "@/app/types/types";
import styles from "../FrontAside.module.css";
import { editRoom_1f } from "@/lib/features/rooms_1f/rooms1fSlice";
import { editRoom_2f } from "@/lib/features/rooms_2f/rooms2fSlice";

const FrontExistTargetAside = () => {
  // toolkit
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { targetRoom } = useAppSelector((state) => state.targetRoom);

  // state
  const [cleaningType, setCleaningType] = useState<string>(
    targetRoom.cleaningType
  );
  const [stayCleaningType, setStayCleaningType] = useState<string>(
    targetRoom.stayCleaningType
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
    id: targetRoom.id,
    roomType: targetRoom.roomType,
    cleaningType: cleaningType,
    stayCleaningType: stayCleaningType,
    isKeyBack: Boolean(isKeyBack),
    nowBeds: nowBeds,
    newBeds: newBeds,
    adult: adult,
    inf: inf,
    kidInf: kidInf,
    isCleaningComplete: Boolean(isCleaningComplete),
    memo: memo,
    isWaitingCheck: false,
  };

  //バリデーションを行い、それ以外の場合newRoomをセットする関数
  const setEditNewRoom = () => {
    const setEditFunction = is1f ? editRoom_1f : editRoom_2f;

    dispatch(setEditFunction({ newRoom }));
    dispatch(setTargetRoom({}));
    window.location.reload();
  };

  // submit時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditNewRoom();
  };
  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>{`${targetRoom.id}の編集`}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.edit_item_container}>
          {/* cleaningType */}

          <div className={styles.edit_item}>
            <label htmlFor="cleaning_type">cleaningType</label>
            <select
              id="cleaning_type"
              defaultValue={targetRoom.cleaningType}
              key={targetRoom.cleaningType}
              onChange={(e) => setCleaningType(e.target.value)}
            >
              {createOptions(cleaningTypeOptions)}
            </select>
          </div>
          {/* stayCleaningType */}

          {
            <div className={styles.edit_item}>
              <label htmlFor="stay_cleaning_type">stayCleaningType</label>
              <select
                id="stay_cleaning_type"
                key={targetRoom.stayCleaningType}
                defaultValue={targetRoom.stayCleaningType}
                onChange={(e) => setStayCleaningType(e.target.value)}
              >
                {createOptions(stayCleaningTypeOptions)}
              </select>
            </div>
          }

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
          <button onClick={() => setTargetRoom({})}>キャンセル</button>
        </div>
      </form>
    </aside>
  );
};

export default FrontExistTargetAside;
