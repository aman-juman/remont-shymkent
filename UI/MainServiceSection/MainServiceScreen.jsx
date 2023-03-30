import styles from "./MainServiceScreen.module.scss";
import MyButton from "../../components/button/MyButton";


const data = [
    {
        title: "КОНДИЦИОНЕРА",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20-Механическая%20прочистка%20канализации",
        list: [
            "Заправка фреона, диагностика",
            "Не охлаждает, течет или не капает конденсат",
            "Не включается, шумит, выдает ошибку, не реагирует на пульт",
            "Нужно заменить блок, трубки, датчик, плату или др.",
        ]
    },
    {
        title: "СТИРАЛЬНАЯ МАШИНА",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20-Гидродинамическая%20промывка%20канализации",
        list: [
            "Не сливает или не отжимает",
            "Не набирает воду, не открывается, не включается или замкнула",
            "Если шумит, прыгает или не греет воду",
            "Нужно заменить барабан, насос, датчик, плату или др.",
        ]

    },
    {
        title: "ХОЛОДИЛЬНИК",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20-Телеинспекция%20труб%20для%20канализации",
        list: [
            "Не работает холодильная камера или воовсе не работает",
            "Нужно заправить фреон или течет",
            "Не морозит морозилка",
            "Нужно заменить компрессор, датчик, плату или др.",
        ]

    },
]
const MainServiceScreen = () => {
    return (
        <section id="clean" className={styles.section}>
            <div className="container">
                <div className={styles.titleWrap}>

                    <h2>Мы ремонтируем</h2>
                    <p>ТОЛЬКО КАЧЕСТВЕННЫЕ ЗАПЧАСТИ И ГАРАНТИЯ НА РАБОТЫ И ЗАПЧАСТИ</p>
                </div>
                <div className={styles.listService}>
                    {
                        data.map((item, i) =>(
                            <div
                                className={styles.listServiceItem}
                                key={i}>
                                <h3 className={styles.listServiceItemTitle}>
                                    {
                                        item.title
                                    }
                                </h3>
                                <p>РЕМОНТИРУЕМ:</p>

                                <ul className={styles.listAdvantage}>
                                    {
                                        item.list.map((el, i) =>(
                                            <li key={i} className={styles.listAdvantageItem}>
                                                {el}
                                            </li>
                                        ))

                                    }
                                    <div className={styles.buttons}>
                                        <MyButton
                                            href="#"
                                            icon={false}
                                            size="large"
                                            text="ЗАКАЗАТЬ" />
                                        <MyButton
                                            href="#"
                                            icon={false}
                                            size="large"
                                            variant="secondary"
                                            text="рассрочка" />
                                    </div>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};


export default MainServiceScreen;


