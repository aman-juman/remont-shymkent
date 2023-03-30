import styles from "./Order.module.scss";
import {useState} from "react";
const MyComponent = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            'name': name,
            'phone': phone,
        }
        console.log(data);

        fetch('/api/order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
    return (
        <div className={styles.wrap}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input value={name} onChange={e=> setName(e.target.value)} placeholder="Your name" type="text" name="name"/>
                <input value={phone} onChange={e=> setPhone(e.target.value)} placeholder="Your phone number" type="number" name="phone"/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default MyComponent;
