// File to provide a footer component.

// Styles
import styles from "./style.module.scss";

export default function Footer({
  srcIcon1,
  srcIcon2,
  srcImageIcon1,
  srcImageIcon2,
  altTextIcon1,
  altTextIcon2,
  aboutText,
  madeBy,
}) {
  return (
    <footer className={styles.footer}>
      <p id="about" className={styles.about}>
        {aboutText}
      </p>
      <p className={styles.seeMore}>See more:</p>
      <div className={styles.iconsDiv}>
        <a href={srcIcon1} target="_blank">
          <img src={srcImageIcon1} alt={altTextIcon1} className={styles.icon} />
        </a>
        <a href={srcIcon2} target="_blank">
          <img src={srcImageIcon2} alt={altTextIcon2} className={styles.icon} />
        </a>
      </div>
      <h5 className={styles.madeByText}>{madeBy}</h5>
    </footer>
  );
}
