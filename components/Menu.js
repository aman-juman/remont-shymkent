import React from 'react';
import {push as BurgerMenu} from "react-burger-menu";
import Link from "next/link";

const Menu =(props) => {
    return (
        <BurgerMenu {...props}>
            <Link passHref href="/" className="menu-item">
                Главная
            </Link>
            <Link passHref href="/#service" className="menu-item">
                Наши услуги
            </Link>
            <Link passHref href="/#result" className="menu-item">
                Результат
            </Link>
            <Link passHref href="/#clean" className="menu-item">
               Промывка
            </Link>
            <Link passHref href="/#footer" className="menu-item">
                Контакты
            </Link>
            <Link passHref href="/#callOrder" className="menu-item">
                Консультация
            </Link>
        </BurgerMenu>
    );
};
export default Menu;