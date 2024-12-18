"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setRooms1f } from "@/lib/features/rooms_1f/rooms1fSlice";
import { setRooms2f } from "@/lib/features/rooms_2f/rooms2fSlice";
import { setTargetRoom } from "@/lib/features/targetRoom/targetRoomSlice";
import { setIsModalClose } from "@/lib/features/modal/isModalOpen";
import { Room } from "@/app/types/types";
import styles from "./CleaningModal.module.css";

const CleaningModal = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  const [isWaitingCheck, setIsWaitingCheck] = useState<boolean>(
    targetRoom!.isWaitingCheck
  );
  const [isCleaningComplete, setIsCleaningComplete] = useState<boolean>(
    targetRoom!.isCleaningComplete
  );

  const newRoom: Room = {
    roomNumber: targetRoom.roomNumber,
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

  const setNewRoom = () => {
    const setFloorRooms = is1f ? setRooms1f : setRooms2f;
    const rooms = is1f ? rooms1f : rooms2f;
    dispatch(setFloorRooms({ newRoom, rooms }));
    dispatch(setTargetRoom({}));
    dispatch(setIsModalClose());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewRoom();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_wrapper}>
        <h2 className={styles.title}>{`${
          targetRoom!.roomNumber
        }の清掃状況`}</h2>
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
            <button onClick={() => dispatch(setIsModalClose())}>
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CleaningModal;
