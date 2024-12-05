import { signOut } from "@/app/login/actions";
import styles from './SignOut.module.css'

const SignOut = () => {
  return <div onClick={signOut} className={styles.text}>サインアウト</div>;
};

export default SignOut;
