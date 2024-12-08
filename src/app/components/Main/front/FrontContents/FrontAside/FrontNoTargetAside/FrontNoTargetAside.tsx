import styles from "../FrontAside.module.css";

const FrontNoTargetAside = () => {
  return (
    <aside className={styles.aside_wrapper}>
      <h2 className={styles.edit_title}>部屋が選択されていません</h2>
    </aside>
  );
};

export default FrontNoTargetAside;
