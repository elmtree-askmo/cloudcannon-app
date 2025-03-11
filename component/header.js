import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { Drawer, Dropdown, Select, Button } from "antd";
import { useEffect, useState } from "react";
import { APP_URL } from "../constant/app.constant";
import { useRouter } from "next/navigation";
import mixpanel from "mixpanel-browser";
import { isMobile } from "react-device-detect";
import SmartBanner from "./smartBanner";
import navData from "../data/nav.json";
import { DownOutlined, GlobalOutlined } from "@ant-design/icons";
import ContactForm from "./contactForm";
import HeaderArrow from "@/public/headerArrow";

export default function Header({ pathname, theme, language, setLanguage, utmParams = null }) {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const [renderBanner, setRenderBanner] = useState(false);

  const HIDE_APP_BANNER_TIME = 1000 * 60 * 60; //1hour

  const data = navData[language] ? navData[language] : navData["en"];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClickLanguage = ({ key }) => {
    localStorage.setItem("language", key);
    setLanguage(key);
  };

  const menuProps = {
    items: [
      { key: "en", label: "English" },
      { key: "zh_hk", label: "Traditional Chinese" },
      { key: "sp", label: "Spanish" },
      // {key: 'fr', label:"French"}
    ],
    onClick: handleClickLanguage,
  };

  const hanldeOpenForm = (e) => {
    e.preventDefault();
    setOpenContact(true);
  };

  const handleSignUp = () => {
    // console.log(eventPrefix + 'Click Sign Up')
    let deeplink = process.env.NEXT_PUBLIC_UTM_DEEPLINK;
    if (utmParams) {
      const search = new URLSearchParams(utmParams).toString();
      deeplink = `${deeplink}?${search}`;
    }
    mixpanel.track(`MarketingPage_SignUp`, { placement: "headerMenu" }, { send_immediately: true }, () => {
      window.location.href = deeplink;
    });
  };
  const handleLogin = () => {
    // console.log(eventPrefix + 'Click Login')
    mixpanel.track(`MarketingPage_Login`, {}, { send_immediately: true }, () => {
      window.location.href = `https://${APP_URL}`;
    });
  };
  const handleClickLogo = () => {
    router.push("/");
  };

  useEffect(() => {
    const hideBannerTS = parseInt(localStorage.getItem("hideBannerTS"));
    if (!hideBannerTS) {
      setRenderBanner(isMobile);
    } else {
      const curTS = new Date().valueOf();
      if (curTS - hideBannerTS > HIDE_APP_BANNER_TIME) {
        setRenderBanner(isMobile);
      } else {
        setRenderBanner(false);
      }
    }
  }, []);

  useEffect(() => {
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const customDropDownRender = (menus) => {
    const items = () => {
      return menus.props.items.map((item, index) => (
        <li key={index} className={`${styles["dropdown-list-item"]} ${isPathMatch(pathname, item.link) ? styles["active"] : ""}`} onClick={() => router.push(item.link)}>
          {item.label}
        </li>
      ));
    };
    return (
      <div className={styles["dropdown-container"]}>
        <ul className={styles["dropdown-list"]}>{items()}</ul>
      </div>
    );
  };

  const isPathMatch = (currentPath, linkPath) => {
    if (linkPath === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(linkPath);
  };

  const renderNav = () => {
    return data.items.map((item, index) => {
      switch (item.type) {
        case "Link":
          return (
            <Link key={index} href={item.link} className={isPathMatch(pathname, item.link) ? styles["active"] : ""}>
              {item.text}
            </Link>
          );
        case "DropDown":
          return (
            <Dropdown key={index} menu={{ items: item.list }} trigger={["click"]} dropdownRender={(menus) => customDropDownRender(menus)} placement="bottom">
              <Link href="" onClick={(e) => e.preventDefault()} className={item.list.some((subItem) => isPathMatch(pathname, subItem.link)) ? styles["active"] : ""}>
                {item.text} <HeaderArrow className={styles.arrow} />
              </Link>
            </Dropdown>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      {renderBanner && (
        <SmartBanner
          hideBanner={() => {
            setRenderBanner(false);
          }}
        />
      )}
      <div className={`${styles.header} ${styles["students"]} ${styles[theme]}`} style={renderBanner ? { top: "70px" } : {}}>
        <div className={styles["main-container"]}>
          <div className={styles["logo-container"]} onClick={handleClickLogo}>
            <Image src={data.logo} alt="Logo" className="logo" width={168} height={40} unoptimized />
            {/* <span className={styles["tagline"]}>#1 AI Study Companion</span> */}
          </div>
          <>
            <div className={styles["menu-container"]}>{renderNav()}</div>
            <Dropdown menu={menuProps} trigger={["click"]} className={styles.language} placement="bottomRight">
              <Button icon={<GlobalOutlined style={{ fontSize: 24, color: "#fff" }} />} shape="circle" type="ghost" />
            </Dropdown>
            {theme === "b2c" && (
              <div className={styles["signup-login-container"]}>
                {isLoggedIn ? (
                  <Link href="https://app.staging.quicktakes.io" className={styles["sign-up-button"]}>
                    Go to QuickTakes App
                  </Link>
                ) : (
                  <>
                    <Link href="" className={styles["login-button"]} onClick={handleLogin}>
                      {data.login}
                    </Link>
                    <Link href="" className={styles["sign-up-button"]} onClick={handleSignUp}>
                      {data.signUp}
                    </Link>
                  </>
                )}
              </div>
            )}
            <Image
              src="/menu.svg"
              alt="menu"
              className={styles["menu"]}
              width={28}
              height={28}
              unoptimized
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          </>
          {theme === "b2b" && (
            <div className={styles["signup-login-container"]}>
              <Link href="#" className={styles["sign-up-button"]} onClick={hanldeOpenForm}>
                {data.contactUs}
              </Link>
            </div>
          )}
        </div>

        <Drawer
          placement="top"
          maskClosable={false}
          open={openMenu}
          title=""
          height="100%"
          onClose={() => {
            setOpenMenu(false);
          }}
          closeIcon={false}
          mask={false}
          classNames={{ body: styles["custom-drawer-body"] }}
          destroyOnClose={true}
        >
          <div className={styles["drawer-header"]}>
            <Image
              src="/close.svg"
              alt="close"
              className={styles["close"]}
              width={28}
              height={28}
              unoptimized
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          </div>
          <div className={styles["drawer-container"]}>
            {data.hamburgerMenu.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            {isLoggedIn ? (
              <Link href="https://app.quicktakes.io">Go to QuickTakes App</Link>
            ) : (
              <>
                <Link href="" onClick={handleLogin}>
                  {data.login}
                </Link>
                <Link href="" onClick={handleSignUp}>
                  {data.signUp}
                </Link>
              </>
            )}
          </div>
        </Drawer>

        <ContactForm open={openContact} onCancel={() => setOpenContact(false)} />
      </div>
    </>
  );
}
