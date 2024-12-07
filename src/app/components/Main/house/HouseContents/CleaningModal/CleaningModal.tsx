import styles from "./CleaningModal.module.css";

const CleaningModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_wrapper}>
        <h2 className={styles.title}>清掃状況</h2>
        <form>
          <div className={styles.status_item_container}>
            <label htmlFor="out">Out</label>
            <div className={styles.status_item}>
              <input type="radio" name="out" value="false" />
              false
              <input type="radio" name="out" value="true" />
              true
            </div>
          </div>
          <div className={styles.status_item_container}>
            <label htmlFor="in">In</label>
            <div className={styles.status_item}>
              <input type="radio" name="in" value="false" />
              false
              <input type="radio" name="in" value="true" />
              true
            </div>
          </div>
          <div className={styles.button_container}>
            <button>送信</button>
            <button>キャンセル</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CleaningModal;
