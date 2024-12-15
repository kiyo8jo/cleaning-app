import styles from "./FloorChangeButton.module.css";

interface Props {
  is1F: boolean;
  setIs1F: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloorChangeButton = ({ is1F, setIs1F }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.floor} ${is1F && styles.set}`}
        onClick={() => setIs1F(true)}
      >
        1F
      </div>
      <div
        className={`${styles.floor} ${!is1F && styles.set}`}
        onClick={() => setIs1F(false)}
      >
        2F
      </div>
    </div>
  );
};

export default FloorChangeButton;
