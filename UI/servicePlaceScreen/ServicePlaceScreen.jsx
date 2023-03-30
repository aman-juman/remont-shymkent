import styles from "./ServicePlaceScreen.module.scss";
import Icon1 from "./icons/icon1.svg";
import Icon2 from "./icons/icon2.svg";
import Icon3 from "./icons/icon3.svg";
import Icon4 from "./icons/icon4.svg";
import Icon5 from "./icons/icon5.svg";
import Icon6 from "./icons/icon6.svg";
import MyButton from "../../components/button/MyButton";
import Link from "next/link";

const data = [
    {
        title: "в частных домах",
        icon: <Icon1 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20в-Частном%20доме",
    },
    {
        title: "в квартирах",
        icon: <Icon2 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20в-Квартире",
    },
    {
        title: "в кафе и ресторанах",
        icon: <Icon3 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20в-Кафе/Ресторан%20(общепит)",
    },
    {
        title: "в автомойках",
        icon: <Icon4 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20в-Автомойке",
    },
    {
        title: "в офисных зданиях",
        icon: <Icon5 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20в-Офисе",
    },
    {
        title: "на заводах",
        icon: <Icon6 />,
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20на-Заводе%20(цех)",
    }
]
const ServicePlaceScreen = () => {
    return (
        <section id="service" className={styles.section}>
            {/*<div className="container">*/}
                <div className={styles.list}>
                    {
                        data.map((item, i) =>(
                            <div
                                key={i}
                                className={styles.listItem}>
                                <Link href={item.href}>
                                    <div className={styles.listItemContent}>
                                        <span className={styles.listItemContentIcon}>{item.icon}</span>
                                        <span className={styles.listItemContentTitle}>РЕМОНТ В РАССРОЧКУ</span>
                                    </div>
                                    <button className={styles.button}>
                                        ПОДРОБНЕЕ
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            {/*</div>*/}
        </section>
    );
};

export default ServicePlaceScreen;
