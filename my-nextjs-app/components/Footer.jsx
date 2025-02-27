import styles from "../styles/Footer.module.css"

export default function Footer({props}) {
    return (
        <h1 className={styles.footer}>{props}</h1>
    );
}