"use client";

import { Room } from "@/app/types/types";
import styles from "../FrontAside.module.css";

interface Props {
  targetRoom: Room | null;
}

const FrontExistTargetAside = ({ targetRoom }: Props) => {
  const cleaningTypeOptions = ["OUT", "IN", "OUT-IN", "STAY", "NONE"];
  const bedsOptions = [1, 2, 3, 4];
  const guestOptions = [0, 1, 2, 3, 4, 5];
  const objOptions = [
    { value: 0, text: "false" },
    { value: 1, text: "true" },
  ];
  // オプションを作る関数（cleaningType,beds,guests,用）
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
  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>{`${targetRoom?.roomNumber}の編集`}</h2>
      <form>
        <div className={styles.edit_item_container}>
          {/* cleaningType */}
          <div className={styles.edit_item}>
            <label htmlFor="cleaningType">cleaningType</label>
            <select
              id="cleaningType"
              defaultValue={targetRoom?.cleaningType}
              key={targetRoom?.cleaningType}
            >
              {createOptions(cleaningTypeOptions)}
            </select>
          </div>

          {/* key */}
          <div className={styles.edit_item}>
            <label htmlFor="key_back">isKeyBack</label>
            <select
              id="key_back"
              defaultValue={Number(targetRoom?.isKeyBack)}
              key={Number(targetRoom?.isKeyBack)}
            >
              {createObjOptions(objOptions)}
            </select>
          </div>
          {/* nowBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="now_beds">nowBeds</label>
            <select
              id="now_beds"
              defaultValue={targetRoom?.nowBeds}
              key={targetRoom?.nowBeds}
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* newBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="new_beds">newBeds</label>
            <select
              id="new_beds"
              defaultValue={targetRoom?.newBeds}
              key={targetRoom?.newBeds}
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* adult */}
          <div className={styles.edit_item}>
            <label htmlFor="adult">adult</label>
            <select
              id="adult"
              defaultValue={targetRoom?.adult}
              key={targetRoom?.adult}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* inf */}
          <div className={styles.edit_item}>
            <label htmlFor="inf">inf</label>
            <select
              id="inf"
              defaultValue={targetRoom?.inf}
              key={targetRoom?.inf}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* kidInf */}
          <div className={styles.edit_item}>
            <label htmlFor="kid_inf">kidInf</label>
            <select
              id="kid_inf"
              defaultValue={targetRoom?.kidInf}
              key={targetRoom?.kidInf}
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* isCleaningComplete */}
          <div className={styles.edit_item}>
            <label htmlFor="is_cleaning_complete">isCleaningComplete</label>
            <select
              id="is_cleaning_complete"
              defaultValue={Number(targetRoom?.isCleaningComplete)}
              key={Number(targetRoom?.isCleaningComplete)}
            >
              {createObjOptions(objOptions)}
            </select>
          </div>
          {/* memo */}
          <div className={styles.edit_item}>
            <label htmlFor="memo">memo</label>
            <textarea
              id="memo"
              defaultValue={targetRoom?.memo}
              key={targetRoom?.memo}
            ></textarea>
          </div>
        </div>
        <div className={styles.button_container}>
          <button>変更</button>
          <button>キャンセル</button>
        </div>
      </form>
    </aside>
  );
};

export default FrontExistTargetAside;
