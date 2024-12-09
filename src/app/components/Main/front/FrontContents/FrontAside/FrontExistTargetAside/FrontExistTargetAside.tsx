import { Room } from "@/app/types/types";
import styles from "../FrontAside.module.css";

interface Props {
  targetRoom: Room | null;
}

const FrontExistTargetAside = ({ targetRoom }: Props) => {
  // );
  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>{`${targetRoom?.roomNumber}の編集`}</h2>
      <form>
        <div className={styles.edit_item_container}>
          {/* cleaningType */}
          <div className={styles.edit_item}>
            <label htmlFor="cleaning_type">cleaningType</label>
            <select
              id="cleaning_type"
              defaultValue={targetRoom?.cleaningType}
              key={targetRoom?.cleaningType}
            >
              <option value="OUT">OUT</option>
              <option value="IN">IN</option>
              <option value="OUT-IN">OUT-IN</option>
              <option value="STAY">STAY</option>
              <option value="NONE">NONE</option>
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
              <option value="0">false</option>
              <option value="1">true</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* isCleaning */}
          <div className={styles.edit_item}>
            <label htmlFor="is_cleaning_complete">isCleaning</label>
            <select
              id="is_cleaning_complete"
              defaultValue={Number(targetRoom?.isCleaningComplete)}
              key={Number(targetRoom?.isCleaningComplete)}
            >
              <option value="0">false</option>
              <option value="1">true</option>
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
