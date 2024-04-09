
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { Button, Drawer, Dropdown, Input, Modal, message } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { APP_URL, X_API_KEY } from "../constant/app.constant";
import { useRouter } from "next/navigation";
import mixpanel from "mixpanel-browser";
import axios from "axios";
import { isMobile } from "react-device-detect";
import SmartBanner from "./smartBanner";
import navData from '../data/nav.json';
import { DownOutlined } from "@ant-design/icons";

export default function Header({ role, pageStr, pathname }) {
    const router = useRouter();
    const eventPrefix = 'Siter ' + role + pageStr;
    console.log(pathname)

    const [openMenu, setOpenMenu] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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
        router.push('/')
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

    const customDropDownRender=(menus)=>{
        const items = ()=>{
            return menus.props.items.map((item,index)=>(
                <li key={index} className={`${styles["dropdown-list-item"]} ${pathname === item.link? styles['active']:''}`} onClick={()=>router.push(item.link)}  >{item.label}</li>
            ))
        }
        return (
            <div className={styles["dropdown-container"]}>
                <ul className={styles["dropdown-list"]}>
                    {items()}
                </ul>
            </div>
        )
    }

    const renderNav = ()=>{
        return navData.items.map((item, index)=>{
            switch(item.type){
                case "Link":
                    return (
                        <Link key={index} href={item.link}  className={pathname === item.link? styles['active']:''} >{item.text}</Link>
                    )
                case "DropDown":
                    return (
                        <Dropdown key={index} menu={{items:item.list}} trigger={["click"]} dropdownRender={(menus)=>customDropDownRender(menus)} placement="bottom" >
                            <Link href="" onClick={(e)=>e.preventDefault()} className={(pathname === '/education' || pathname === '/faq')? styles['active']:''} >{item.text} <DownOutlined style={{width:12,marginLeft:5,marginTop:2}} /></Link>
                        </Dropdown>
                    )
                default:
                    return null;
            }
        })
    }

    return (
        <>
            {
                renderBanner && 
                <SmartBanner hideBanner={()=>{setRenderBanner(false)}} role={role} pageStr={pageStr} />
            }
            <div className={`${styles.header} ${styles["students"]}`} style={renderBanner?{top:'70px'}:{}} >
                <div className={styles['main-container']}>
                    <div className={styles['logo-container']} onClick={handleClickLogo}>
                        <Image
                            src={navData.logo}
                            alt="Logo"
                            className="logo"
                            width={168}
                            height={40}
                            unoptimized
                        />
                    </div>
                    <div className={styles["menu-container"]}>
                        {
                            renderNav()
                        }
                        
                    </div>
                    <div className={styles['signup-login-container']}>
                        <Link href="" className={styles["login-button"]} onClick={handleLogin}>Login</Link>
                        <Link href="" className={styles["sign-up-button"]} onClick={handleSignUp} >Sign Up</Link>
                    </div>
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
                        <Link href={'/quicktakes-about-us'} onClick={()=>{ setOpenMenu(false)}}>About</Link>
                        <Link href={'/faq'} onClick={()=>{ setOpenMenu(false)}}>FAQ</Link>
                        <Link href={'/education'} onClick={()=>{ setOpenMenu(false)}}>AI in Education</Link>
                        <Link href={'/plans'} onClick={()=>{ setOpenMenu(false)}}>Plans</Link>
                        <Link href="" onClick={handleLogin}>Login</Link>
                        <Link href="" onClick={handleSignUp}>Sign Up</Link>
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
                    <div className={`${styles["contact-form-container"]} ${styles["students"]}`}>
                        <form onSubmit={handleSubmit} >
                            <div>Contact us:</div>
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