import { X_API_KEY } from "@/constant/app.constant";
import { Button, Input, Modal, message } from "antd";
import axios from "axios";
import { useState } from "react";
import styles from './contactForm.module.css';
import navData from '../data/nav.json';
export default function ContactForm({open, onCancel, language='en'}){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const data = navData[language]?.contactForm? navData[language]?.contactForm:navData['en']?.contactForm;

    const resetForm = ()=>{
        setEmail('');
        setName('');
        setDescription('');
    }
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

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/quicktake/api/contact-us`;
        axios.post(url ,{
            name:n,
            email:m,
            description:d,
            subject:"Institution Inquiry"
        },{ headers:{'x-api-key': X_API_KEY}})
        .then(res=>{
            message.success('Your request successfully sent');
            resetForm();
            onCancel && onCancel();
        })
        .catch(e=>{
            message.error('something went wrong');
            onCancel && onCancel();
        })
    }
    return (
        <Modal
            title=""
            open={open}
            centered
            footer={null}
            onCancel={() => { onCancel();resetForm() }}
            className={styles["custom-modal"]}
            width={600}
            maskClosable={false}
        >
            <div className={`${styles["contact-form-container"]} ${styles["students"]}`}>
                <form onSubmit={handleSubmit} >
                    <div>{data.contactUs}</div>
                    <span className={styles.formlabel}>{data.name}</span>
                    <Input className={styles.customInput} placeholder={data.name} name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <span className={styles.formlabel}>{data.email}</span>
                    <Input className={styles.customInput} placeholder={data.email} name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <span className={styles.formlabel}>{data.subject}</span>
                    <Input className={styles.customInput} placeholder={data.subject} name="subject" value={data.subjectValue}  disabled/>
                    <span className={styles.formlabel}>{data.message}</span>
                    <Input className={styles.customInput} placeholder={data.message} name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                    <Button type="primary" className={!name||!email||!description? [styles.disabled, styles.send]: styles.send} htmlType="submit" >{data.sendEmail}</Button>
                </form>
            </div>
        </Modal>
    )
}