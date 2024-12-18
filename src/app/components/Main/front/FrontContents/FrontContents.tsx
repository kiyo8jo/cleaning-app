import FrontMain from "./FrontMain/FrontMain";
import FrontAside from "./FrontAside/FrontAside";
import styles from "./FrontContents.module.css";

const FrontContents = () => {
  return (
    <div className={styles.front_contents_wrapper}>
      <FrontMain />
      <FrontAside />
    </div>
  );
};

export default FrontContents;
