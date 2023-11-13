
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { Button, Drawer, Input, Modal, message } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { APP_URL, X_API_KEY } from "../constant/app.constant";
import { useRouter } from "next/navigation";
import mixpanel from "mixpanel-browser";
import axios from "axios";
import { isMobile } from "react-device-detect";
import SmartBanner from "./smartBanner";

export default function Header({ layoutType, role, pageStr }) {
    const router = useRouter();
    const eventPrefix = 'Siter ' + role + pageStr;

    const [openMenu, setOpenMenu] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // links
    const [aboutUsLink] = useState(layoutType === 'teachers' ? '/about-us-teachers' : '/quicktakes-about-us');
    const [FAQLink] = useState(layoutType === 'teachers' ? '/faq-teachers' : '/faq');

    const [renderBanner, setRenderBanner] = useState(false);

    const HIDE_APP_BANNER_TIME = 1000 * 60 * 60; //1hour

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = name;
        const m = email;
        const d = description;
        const isEmail = (email) => {
            const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return reg.test(email)
        }
        if(!n)return message.error('Name is required');
        if(!m)return message.error('Email is required');
        if(!d)return message.error('Description is required');
        if(!isEmail(m))return message.error('Invalid Email');

        const url = 'https://api.quicktakes.io/api-node/quicktake/api/contact-us';
        axios.post(url ,{
            name:n,
            email:m,
            description:d
        },{ headers:{'x-api-key': X_API_KEY}})
        .then(res=>{
            message.success('Your request successfully sent');
            setOpenContact(false);
            resetForm();
        })
        .catch(e=>{
            message.error('something went wrong');
            setOpenContact(false);
        })
    }
    const handleSignUp = () => {
        // console.log(eventPrefix + 'Click Sign Up')
        mixpanel.track(eventPrefix + 'Click Sign Up', {}, {send_immediately:true}, ()=>{
            window.location.href = `https://${APP_URL}/signup`
        } )
    }
    const handleLogin = () => {
        // console.log(eventPrefix + 'Click Login')
        mixpanel.track(eventPrefix + 'Click Login', {}, {send_immediately:true}, ()=>{
            window.location.href = `https://${APP_URL}`
        } )
    }
    const handleClickLogo = () => {
      
        if(layoutType === 'teachers'){
            router.push('/teachers')
        }
        else{
            router.push('/')
        }
    }

    const resetForm = ()=>{
        setEmail('');
        setName('');
        setDescription('');
    }

    useEffect(()=>{
        const hideBannerTS = parseInt(localStorage.getItem('hideBannerTS'));
        if(!hideBannerTS){
            setRenderBanner(isMobile)
        }else{
            const curTS = new Date().valueOf();
            if(curTS - hideBannerTS > HIDE_APP_BANNER_TIME){
                setRenderBanner(isMobile)
            }else{
                setRenderBanner(false);
            }
        }
    },[])

    return (
        <>
            {
                renderBanner && 
                <SmartBanner hideBanner={()=>{setRenderBanner(false)}} role={role} />
            }
            <div className={`${styles.header} ${styles[layoutType]}`} style={renderBanner?{top:'70px'}:{}} >
                <div className={styles['main-container']}>
                    <div className={styles['logo-container']} onClick={handleClickLogo}>
                        <Image
                            src="/quicktakesIcon.svg"
                            alt="Logo"
                            className="logo"
                            width={40}
                            height={40}
                            unoptimized
                        />
                        <p><strong>QuickTakes</strong> for {layoutType === 'teachers' ? 'Teachers' : 'Students'}</p>
                    </div>
                    <div className={styles["menu-container"]}>
                        <span onClick={() => { setOpenContact(true) }}>Contact</span>
                        <Link href={aboutUsLink}>About us</Link>
                        <Link href={FAQLink}>FAQ</Link>
                        <i className={styles["sign-up-button"]} onClick={handleSignUp} >Sign Up</i>
                        <Link href="" onClick={handleLogin}>Log In</Link>
                        <Image
                            src="/menu.svg"
                            alt="menu"
                            className={styles["menu"]}
                            width={28}
                            height={28}
                            unoptimized
                            onClick={() => { setOpenMenu(true) }}
                        />
                    </div>
                </div>

                <Drawer
                    placement="top"
                    maskClosable={false}
                    open={openMenu}
                    title=""
                    height="100%"
                    onClose={() => { setOpenMenu(false) }}
                    closeIcon={false}
                    mask={false}
                    classNames={{ body: role=='Student'?styles["custom-drawer-body"]:styles["custom-drawer-body_teachers"] }}
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
                            onClick={() => { setOpenMenu(false) }}
                        />
                    </div>
                    <div className={styles["drawer-container"]}>
                        <Link href={aboutUsLink} onClick={()=>{ setOpenMenu(false)}}>About us</Link>
                        <Link href="" onClick={handleLogin}>Log In</Link>
                        <Link href={FAQLink} onClick={()=>{ setOpenMenu(false)}}>FAQ</Link>
                        <span onClick={() => { setOpenMenu(false); setOpenContact(true); }}>Contact</span>
                    </div>
                </Drawer>

                <Modal
                    title=""
                    open={openContact}
                    centered
                    footer={null}
                    onCancel={() => { setOpenContact(false);resetForm() }}
                    className={styles["custom-modal"]}
                    width={"auto"}
                    maskClosable={false}
                >
                    <div className={`${styles["contact-form-container"]} ${styles[layoutType]}`}>
                        <form onSubmit={handleSubmit} >
                            <div>Contanct us:</div>
                            <Input placeholder="Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                            <Input placeholder="Email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            <Input placeholder="Description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                            <Button type="primary" className={styles["send"]} htmlType="submit" >Send</Button>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    )
}