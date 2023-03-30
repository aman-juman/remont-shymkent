import {useState} from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import Link from "next/link";
import Logo from "/public/logo.svg";
import MyButton from "../../components/button/MyButton";
import Navbar from "./Navbar";

const Header = () => {



    return (
        <header className={styles.header}>
            <div className={`${styles.topBar} container`}>
                <Logo className={styles.logo}/>
                <Navbar/>
            </div>
        </header>
    );
};

const CallBlock = props =>{
    const {
        number="+7 (776) 607 00 70",
        href = "tel:+77766070070",
        text = "Круглосуточно 24/7"} = props;
    return(
        <Link href={href} className={styles.callBlock}>
            <h3>{number}</h3>
            <span>{text}</span>
        </Link>
    )
}

export default Header;
