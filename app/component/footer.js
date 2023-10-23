import Link from "next/link";
import styles from './footer.module.css';


export default function Footer(){
    return (
        <div className={styles["footer"]}>
            <p>
                EdKey, Inc. All Rights Reserved © 2023 | <Link href="https://app.quicktakes.io/terms" target="_blank">Terms of Service</Link> | <Link href="https://app.quicktakes.io/privacy-policy" target="_blank" >Privacy Policy</Link> | Contact
            </p>
        </div>
    )
}