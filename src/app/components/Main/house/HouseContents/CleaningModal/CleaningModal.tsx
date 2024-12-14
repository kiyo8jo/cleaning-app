"use client";

import { Room } from "@/app/types/types";
import styles from "./CleaningModal.module.css";
import { useState } from "react";

interface Props {
  targetRoom: Room | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CleaningModal = ({ targetRoom, setIsModalOpen }: Props) => {
  const [waitingCheck, setWaitingCheck] = useState<boolean>(
    targetRoom!.isWaitingCheck
  );
  const [isCleaningComplete, setIsCleaningComplete] = useState<boolean>(
    targetRoom!.isCleaningComplete
  );
  console.log(isCleaningComplete);
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_wrapper}>
        <h2 className={styles.title}>{`${
          targetRoom!.roomNumber
        }の清掃状況`}</h2>
        <h3 className={styles.cleaning_type}>{targetRoom!.cleaningType}</h3>
        <form>
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
                  checked={!waitingCheck}
                  onChange={() => setWaitingCheck(false)}
                />
                <label htmlFor="is_waiting_check_false">false</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="is_waiting_check_true"
                  name="is_waiting_check"
                  value="true"
                  checked={waitingCheck}
                  onChange={() => setWaitingCheck(true)}
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
            <button type="submit" onClick={() => setIsModalOpen(false)}>
              送信
            </button>
            <button onClick={() => setIsModalOpen(false)}>キャンセル</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CleaningModal;
