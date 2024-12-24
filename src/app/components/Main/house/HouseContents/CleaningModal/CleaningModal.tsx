"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { editRoom_1f } from "@/lib/features/rooms_1f/rooms1fSlice";
import { editRoom_2f } from "@/lib/features/rooms_2f/rooms2fSlice";
import { setTargetRoom } from "@/lib/features/targetRoom/targetRoomSlice";
import { setIsModalClose } from "@/lib/features/modal/isModalOpen";
import { Room } from "@/app/types/types";
import styles from "./CleaningModal.module.css";

const CleaningModal = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  const [isWaitingCheck, setIsWaitingCheck] = useState<boolean>(
    targetRoom!.isWaitingCheck
  );
  const [isCleaningComplete, setIsCleaningComplete] = useState<boolean>(
    targetRoom!.isCleaningComplete
  );

  const newRoom: Room = {
    id: targetRoom.id,
    roomType: targetRoom.roomType,
    cleaningType: targetRoom.cleaningType,
    stayCleaningType: targetRoom.stayCleaningType,
    isKeyBack: targetRoom.isKeyBack,
    nowBeds: targetRoom.nowBeds,
    newBeds: targetRoom.newBeds,
    adult: targetRoom.adult,
    inf: targetRoom.inf,
    kidInf: targetRoom.kidInf,
    isCleaningComplete: isCleaningComplete,
    memo: targetRoom.memo,
    isWaitingCheck: isWaitingCheck,
  };

  const setEditNewRoom = () => {
    const setEditFunction = is1f ? editRoom_1f : editRoom_2f;
    dispatch(setEditFunction({ newRoom }));
    dispatch(setIsModalClose());
    dispatch(setTargetRoom({}));
    window.location.reload();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditNewRoom();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_wrapper}>
        <h2 className={styles.title}>{`${targetRoom!.id}の清掃状況`}</h2>
        <h3 className={styles.cleaning_type}>{targetRoom!.cleaningType}</h3>
        <form onSubmit={handleSubmit}>
          {/* cleaning */}
          <div className={styles.status_item_container}>
            <label htmlFor="is_waiting_check">isWaitingCheck</label>
            <div className={styles.status_item}>
              <div>
                <input
                  type="radio"
                  id="is_waiting_check_false"
                  name="is_waiting_check"
                  value="false"
                  checked={!isWaitingCheck}
                  onChange={() => setIsWaitingCheck(false)}
                />
                <label htmlFor="is_waiting_check_false">false</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="is_waiting_check_true"
                  name="is_waiting_check"
                  value="true"
                  checked={isWaitingCheck}
                  onChange={() => setIsWaitingCheck(true)}
                />
                <label htmlFor="is_waiting_check_true">true</label>
              </div>
            </div>
          </div>
          {/* confirmation */}
          <div className={styles.status_item_container}>
            <label htmlFor="is_cleaning_complete">isCleaningComplete</label>
            <div className={styles.status_item}>
              <div>
                <input
                  type="radio"
                  id="is_cleaning_complete_false"
                  name="is_cleaning_complete"
                  value="false"
                  checked={!isCleaningComplete}
                  onChange={() => setIsCleaningComplete(false)}
                />
                <label htmlFor="is_cleaning_complete_false">false</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="is_cleaning_complete_true"
                  name="is_cleaning_complete"
                  value="true"
                  checked={isCleaningComplete}
                  onChange={() => setIsCleaningComplete(true)}
                />
                <label htmlFor="is_cleaning_complete_true">true</label>
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <button type="submit">送信</button>
            <div
              onClick={() => {
                dispatch(setTargetRoom({}));
                dispatch(setIsModalClose());
              }}
            >
              <p>キャンセル</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CleaningModal;
