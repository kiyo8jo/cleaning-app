import styles from "./FloorChangeButton.module.css";

const FloorChangeButton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.floor}>1F</div>
      <div className={styles.floor}>2F</div>
    </div>
  );
};

export default FloorChangeButton;
