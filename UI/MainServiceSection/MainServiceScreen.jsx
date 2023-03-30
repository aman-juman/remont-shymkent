import styles from "./MainServiceScreen.module.scss";
import MyButton from "../../components/button/MyButton";


const data = [
    {
        title: "КОНДИЦИОНЕРА",
        href: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Кондиционера",
        hrefLoan: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Кондиционера%20в%20рассрочку",
        list: [
            "Заправка фреона, диагностика",
            "Не охлаждает, течет или не капает конденсат",
            "Не включается, шумит, выдает ошибку, не реагирует на пульт",
            "Нужно заменить блок, трубки, датчик, плату или др.",
        ]
    },
    {
        title: "СТИРАЛЬНАЯ МАШИНА",
        href: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Стиральной%20машины",
        hrefLoan: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Стиральной%20машины%20в%20рассрочку",
        list: [
            "Не сливает или не отжимает",
            "Не набирает воду, не открывается, не включается или замкнула",
            "Если шумит, прыгает или не греет воду",
            "Нужно заменить барабан, насос, датчик, плату или др.",
        ]

    },
    {
        title: "ХОЛОДИЛЬНИК",
        href: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Холодильника",
        hrefLoan: "https://wa.me/77071671682?text=Меня%20интересует%20Ремонт%20Холодильника%20в%20рассрочку",
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
                    <p>МЫ ИСПОЛЬЗУЕМ ТОЛЬКО КАЧЕСТВЕННЫЕ ЗАПЧАСТИ. ДАЁМ ГАРАНТИЮ НА РАБОТЫ И ЗАПЧАСТИ НА 1 ГОД</p>
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
                                            href={item.href}
                                            icon={false}
                                            size="large"
                                            text="ЗАКАЗАТЬ" />
                                        <MyButton
                                            href={item.hrefLoan}
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


