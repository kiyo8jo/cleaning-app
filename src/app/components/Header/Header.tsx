import CurrentPage from "./CurrentPage/CurrentPage";
import Date from "./Date/Date";
import styles from "./Header.module.css";
import HomeLink from "./HomeLink/HomeLink";
import SignOut from "./SignOut/SignOut";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Date />
      <CurrentPage />
      <HomeLink />
      <SignOut />
    </div>
  );
};

export default Header;
