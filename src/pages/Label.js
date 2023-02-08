import styles from "./Label.module.css";

const Label = () => {
  return (
    <div className={styles.label}>
      <div className={styles.websiteDesign}>Website Design</div>
      <img className={styles.labelChild} alt="" src="../group-1000004314.svg" />
    </div>
  );
};

export default Label;
