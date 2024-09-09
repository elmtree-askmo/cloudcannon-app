import Link from "next/link";
import styles from './footer.module.css';
import { useEffect, useState } from "react";
import { Button, Input, Modal, message } from "antd";
import axios from "axios";
import { APP_URL, X_API_KEY, appStoreLink, googlePlayLink } from "../constant/app.constant";
import navData from '../data/nav.json';
import Image from "next/image";
import mixpanel from "mixpanel-browser";
import { SpotifyOutlined } from "@ant-design/icons";


export default function Footer({theme, language='en'}){
    const [openContact, setOpenContact] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const data = navData[language]?.footerNav? navData[language]?.footerNav:navData['en']?.footerNav;

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

    const resetForm = ()=>{
        setEmail('');
        setName('');
        setDescription('');
    }

    const handleSignUp = () => {
        mixpanel.track(`MarketingPage_SignUp`, { placement: 'footerMenu' }, {send_immediately:true}, ()=>{
            window.location.href = `https://${APP_URL}/signup`
        })
    }

    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-center-container']}>
                <div className={styles['footer-content']}>
                    <div className={styles['footer-left']}>
                        <Image
                            src="/quicktakesIcon_new.svg"
                            alt="Logo"
                            className="logo"
                            width={168}
                            height={40}
                            unoptimized
                        />
                        <p>{data.slogan}</p>
                        <div className={styles['button-group']}>
                            <Button className={styles["signup-button"]} onClick={handleSignUp} >{data.button_label}</Button>
                            <div className={styles['socialmeida-container']}>
                                <Link href="https://www.instagram.com/quicktakes.io/" target="_blank" >
                                    <img src="/socialmedia/ins.svg" />
                                </Link>
                                <Link href="https://www.tiktok.com/@quicktakes.io" target="_blank" >
                                    <img src="/socialmedia/tiktok.svg" />
                                </Link>
                                <Link href="https://www.youtube.com/@Edkey_QuickTakes" target="_blank" >
                                    <img src="/socialmedia/youtube.svg" />
                                </Link>
                                <Link href="https://open.spotify.com/user/317iuopw7yk2ncum6bq4otwpzmo4?si=51d9c112b7f84e72" target="_blank">
                                    <SpotifyOutlined style={{fontSize:22, color:"#fff"}} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles['footer-mid']}>
                        <div>
                            <h4>{data.quicktakesNav.label}</h4>
                            {
                                data.quicktakesNav.map.map((item,index)=>(
                                    <Link key={index} href={item.link}>{item.label}</Link>
                                ))
                            }
                        </div>
                        <div>
                            <h4>{data.resourcesNav.label}</h4>
                            {
                                data.resourcesNav.map.map((item,index)=>(
                                    <Link key={index} href={item.link}>{item.label}</Link>
                                ))
                            }
                        </div>
                        <div>
                            <h4>{data.supportNav.label}</h4>
                            {
                                data.supportNav.map.map((item,index)=>(
                                    <Link key={index} href={item.link}>{item.label}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles['footer-right']}>
                        <p>{data.downloadQuicktake}</p>
                        <div>
                            <Link href={appStoreLink}>
                                <Image
                                    src="/appStore.svg"
                                    alt="appStore"
                                    className="appStore"
                                    width={227}
                                    height={65}
                                    unoptimized
                                />
                            </Link>
                            <Link href={googlePlayLink}>
                                <Image
                                    src="/googlePlay.svg"
                                    alt="googlePlay"
                                    className="googlePlay"
                                    width={227}
                                    height={65}
                                    unoptimized
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <p>
                        EdKey, Inc. All Rights Reserved © 2024 
                    </p>
                </div>
            </div>

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
                <div className={`${styles["contact-form-container"]} ${styles['students']}`}>
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
    )
}