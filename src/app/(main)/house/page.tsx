import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import styles from "./page.module.css";
import HouseContents from "@/app/components/Main/house/HouseContents/HouseContents";

const housePage = () => {
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <HouseContents />
    </div>
  );
};

export default housePage;
