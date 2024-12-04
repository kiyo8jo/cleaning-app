import CurrentPage from "./CurrentPage/CurrentPage";
import styles from "./Header.module.css";
import HomeLink from "./HomeLink/HomeLink";
import SignOut from "./SignOut/SignOut";
import Today from "./Today/Today";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Today />
      <CurrentPage />
      <HomeLink />
      <SignOut />
    </div>
  );
};

export default Header;
