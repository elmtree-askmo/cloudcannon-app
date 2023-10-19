'use client'

import Image from "next/image";
import Link from "next/link";
import "./header.css";
import { Button, Drawer, Input, Modal } from "antd";
import { useState } from "react";
import { APP_URL } from "../global/global";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;

        console.log(name, email, description)
    }
    const handleSignUp = ()=>{
        window.location.href = `https://${APP_URL}/signup`
    }
    const handleLogin = ()=>{
        window.location.href = `https://${APP_URL}`
    }

    return (
        <div className="header">
            <div className="main-container desktop-view">
                <div className="logo-container">
                    <Image 
                        src="/quicktakesIcon.svg"
                        alt="Logo"
                        className="logo"
                        width={40}
                        height={40}
                    />
                    <p><strong>QuickTakes</strong> for Students</p>
                </div>
                <div className="menu-container">
                    <span onClick={()=>{setOpenContact(true)}}>Contact</span>
                    <Link href="/about-us">About us</Link>
                    <Link href="/faq">FAQ</Link>
                    <i className="sign-up-button" onClick={handleSignUp} >Sign Up</i>
                    <Link href="" onClick={handleLogin}>Log In</Link>
                    <Image 
                        src="/menu.svg"
                        alt="menu"
                        className="menu"
                        width={28}
                        height={28}
                        onClick={()=>{setOpenMenu(true)}}
                    />
                </div>
            </div>

            <Drawer 
                placement="top"
                maskClosable={false}
                open={openMenu}
                title=""
                height="100%"
                onClose={()=>{setOpenMenu(false)}}
                closeIcon={false}
                mask={false}
                classNames={{body:"custom-drawer-body"}}
                destroyOnClose={true}
            >
                <div className="drawer-header">
                    <Image 
                        src="/close.svg"
                        alt="close"
                        className="close"
                        width={28}
                        height={28}
                        onClick={()=>{setOpenMenu(false)}}
                    />
                </div>
                <div className="drawer-container">
                    <Link href="/about-us">About us</Link>
                    <Link href="">Log In</Link>
                    <Link href="/faq">FAQ</Link>
                    <span onClick={()=>{setOpenMenu(false);setOpenContact(true);}}>Contact</span>
                </div>
            </Drawer>

            <Modal
                title=""
                open={openContact}
                centered
                footer={null}
                onCancel={()=>{setOpenContact(false)}}
                className="custom-modal"
                width={"auto"}
                maskClosable={false}
            >
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} >
                        <div>Contanct us:</div>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <Input placeholder="Description" name="description" />
                        <Button type="primary" className="send" htmlType="submit" >Send</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}