import mixpanel from "mixpanel-browser";
import { appStoreLink, googlePlayLink } from "@/constant/app.constant";
import styles from "../../styles/Home.module.css";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Banner({ content, block, language = "en", utmParams = null }) {
  const handleSignUpNow = () => {
    let deeplink = process.env.NEXT_PUBLIC_UTM_DEEPLINK;
    if (utmParams) {
      const search = new URLSearchParams(utmParams).toString();
      deeplink = `${deeplink}?${search}`;
    }
    mixpanel.track("MarketingPage_SignUp", { placement: "homeBanner" }, { send_immediately: true }, () => {
      window.location.href = deeplink;
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/appStore.svg" as="image" />
        <link rel="preload" href="/googlePlay.svg" as="image" />
      </Head>
      <div className={styles["section-1-container"]}>
        <div className={`${styles["section-1"]}`}>
          <div className={styles["section-1-center-container"]}>
            <div className={styles["section-1-major"]}>
              <h2>{block.contentTitle[language] || block.contentTitle["en"]}</h2>
              <h3>{block.subTitle[language] || block.subTitle["en"]}</h3>
              <Button type="primary" className={`custom-antd-design-button-student ${styles["sign-up-now"]}`} onClick={handleSignUpNow}>
                {block.buttonTxt[language] || block.buttonTxt["en"]}
              </Button>
              <div className={styles["download-group"]}>
                <Link href={appStoreLink} target="_blank">
                  <Image 
                    src="/appStore.svg" 
                    alt="appStore" 
                    width={227} 
                    height={65} 
                    priority={true}
                    loading="eager"
                  />
                </Link>
                <Link href={googlePlayLink} target="_blank">
                  <Image 
                    src="/googlePlay.svg" 
                    alt="googlePlay" 
                    width={227} 
                    height={65} 
                    priority={true}
                    loading="eager"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
