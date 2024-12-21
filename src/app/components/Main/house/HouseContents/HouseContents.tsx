"use client";

import { useAppSelector } from "@/lib/hooks";
import HouseMain from "./HouseMain/HouseMain";
import CleaningModal from "./CleaningModal/CleaningModal";
import styles from "./HouseContents.module.css";

const HouseContents = () => {
  const { isModalOpen } = useAppSelector((state) => state.isModalOpen);

  return (
    <div className={styles.wrapper}>
      <HouseMain />
      {isModalOpen && <CleaningModal />}
    </div>
  );
};

export default HouseContents;
