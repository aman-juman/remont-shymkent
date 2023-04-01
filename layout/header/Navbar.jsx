import styles from "./Header.module.scss";
import cn from "classnames";
import Link from "next/link";
import {useState} from "react";

const nav = [
    {
        name: "Услуги",
        link: "/#service",
    },
    {
        name: "Преимущества",
        link: "/#advantages",
    },
    {
        name: "Рассрочка",
        link: "/#loan",
    },
    {
        name: "Консультация",
        link: "/#callOrder",
    },
    {
        name: "Контакты",
        link: "/#footer",
    },
];
const Navbar = () => {
    return (
        <nav className={styles.nav}>
                <ul className={styles.list}>
                    {
                        nav.map((item, index) =>(
                            <li
                                key={index}
                                className={styles.listItem}
                            >
                                <Link passHref href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
        </nav>
    );
};

export default Navbar;
