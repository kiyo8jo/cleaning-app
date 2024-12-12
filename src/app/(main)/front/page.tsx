import FrontContents from "@/app/components/Main/front/FrontContents/FrontContents";
import styles from "./page.module.css";
import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";

const frontPage = () => {
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <FrontContents />
    </div>
  );
};

export default frontPage;
