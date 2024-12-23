import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.department_container}>
        <Link href="/front" className={styles.link}>
          フロント用画面
        </Link>
        <Link href="/house" className={styles.link}>
          ハウス用画面
        </Link>
      </div>
      <div className={styles.create_container}>
        <Link href="/createTable" className={styles.link}>
          作成用画面
        </Link>
      </div>
    </div>
  );
}
