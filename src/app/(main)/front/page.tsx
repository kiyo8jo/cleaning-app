import FrontContents from "@/app/components/Main/front/FrontContents/FrontContents";
import styles from "./page.module.css";
import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";

const frontPage = () => {
  return (
    // front,houseのcssは後でlayout.tsxにまとめる
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <FrontContents />
    </div>
  );
};

export default frontPage;
