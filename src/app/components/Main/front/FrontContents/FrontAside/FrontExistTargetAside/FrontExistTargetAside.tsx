import styles from "../FrontAside.module.css";
interface Room {
  roomNumber: number;
  roomType: string;
  cleaningType: string;
  nowBeds: number;
  newBeds: number;
  adult: number;
  inf: number;
  kidInf: number;
}

interface Props {
  targetRoom: Room | null;
}

const FrontExistTargetAside = ({ targetRoom }: Props) => {
  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>{`${targetRoom?.roomNumber}の編集`}</h2>
      <form>
        <div className={styles.edit_item_container}>
          {/* cleaningType */}
          <div className={styles.edit_item}>
            <label htmlFor="cleaning_type">cleaningType</label>
            <select id="cleaning_type">
              <option value="out">out</option>
              <option value="in">in</option>
              <option value="out-in">out-in</option>
              <option value="stay">stay</option>
              <option value="none">none</option>
            </select>
          </div>
          {/* key */}
          <div className={styles.edit_item}>
            <label htmlFor="key">key</label>
            <select id="key">
              <option value="back">backed</option>
              <option value="not-back">not-back</option>
            </select>
          </div>
          {/* nowBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="nowBeds">nowBeds</label>
            <select id="nowBeds">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* newBeds */}
          <div className={styles.edit_item}>
            <label htmlFor="newBeds">newBeds</label>
            <select id="newBeds">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* adult */}
          <div className={styles.edit_item}>
            <label htmlFor="adult">adult</label>
            <select id="adult">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* inf */}
          <div className={styles.edit_item}>
            <label htmlFor="inf">inf</label>
            <select id="inf">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* kidInf */}
          <div className={styles.edit_item}>
            <label htmlFor="kidInf">kidInf</label>
            <select id="kidInf">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* isCleaning */}
          <div className={styles.edit_item}>
            <label htmlFor="isCleaning">isCleaning</label>
            <select id="isCleaning">
              <option value="0">false</option>
              <option value="1">true</option>
            </select>
          </div>
          {/* memo */}
          <div className={styles.edit_item}>
            <label htmlFor="memo">memo</label>
            <textarea id="memo"></textarea>
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
