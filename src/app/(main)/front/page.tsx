import styles from "./page.module.css";
import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";

const frontPage = () => {
  return (
    // front,houseのcssは後でlayout.tsxにまとめる
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <div className={styles.content_wrapper}>frontPage</div>
    </div>
  );
};

export default frontPage;
