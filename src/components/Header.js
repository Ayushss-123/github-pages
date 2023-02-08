import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.homeParent}>
      <div className={styles.home}>Home</div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.ourTeams}>Our Teams</div>
      <div className={styles.services}>Services</div>
    </div>
  );
};

export default Header;
