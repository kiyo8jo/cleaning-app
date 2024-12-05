import { signInWithGoogle } from "./actions";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <p>Googleでログインする</p>
        <button formAction={signInWithGoogle}>Log in</button>
      </form>
    </div>
  );
}
