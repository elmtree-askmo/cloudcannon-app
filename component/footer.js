import Link from "next/link";
import styles from './footer.module.css';
import { useState } from "react";
import { Button, Input, Modal, message } from "antd";
import axios from "axios";
import { X_API_KEY } from "../constant/app.constant";


export default function Footer({layoutType}){
    const [openContact, setOpenContact] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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

        const url = 'https://api.dev.quicktakes.io/api-node/quicktake/api/contact-us';
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


    return (
        <>
        
        <div className={styles["footer"]}>
            <p>
                EdKey, Inc. All Rights Reserved © 2023 | <Link href="https://app.quicktakes.io/terms" target="_blank">Terms of Service</Link> | <Link href="https://app.quicktakes.io/privacy-policy" target="_blank" >Privacy Policy</Link> | <span onClick={()=>{setOpenContact(true)}} className={styles.contact}>Contact</span>
            </p>
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
        </>
    )
}