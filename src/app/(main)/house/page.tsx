import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import styles from "./page.module.css";

const housePage = () => {
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <div className={styles.content_wrapper}>housePage</div>
    </div>
  );
};

export default housePage;
