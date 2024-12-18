"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setIs1fFalse, setIs1fTrue } from "@/lib/features/is1f/is1fSlice";
import styles from "./FloorChangeButton.module.css";

const FloorChangeButton = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.floor} ${is1f && styles.set}`}
        onClick={() => dispatch(setIs1fTrue())}
      >
        1F
      </div>
      <div
        className={`${styles.floor} ${!is1f && styles.set}`}
        onClick={() => dispatch(setIs1fFalse())}
      >
        2F
      </div>
    </div>
  );
};

export default FloorChangeButton;
