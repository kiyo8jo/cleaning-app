import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import FrontContents from "@/app/components/Main/front/FrontContents/FrontContents";
import styles from "./page.module.css";

const FrontPage = () => {
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <FrontContents />
    </div>
  );
};

export default FrontPage;
