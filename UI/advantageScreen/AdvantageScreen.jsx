import styles from "./AdvantageScreen.module.scss";
import Advantage1 from "./icons/advantage1.svg";
import Advantage2 from "./icons/advantage2.svg";
import Advantage3 from "./icons/advantage3.svg";
import Advantage4 from "./icons/advantage4.svg";
import Advantage5 from "./icons/advantage5.svg";
import Advantage6 from "./icons/advantage6.svg";

const dataBase = {
    list: [
        {
            title: "Выезд мастера и диагностика в подарок",
            description: "Приедем за 30 мин после заявки",
            icon: <Advantage1 />
        },
        {
            title: "Гарантия качества",
            description: "Гарантия 1 год на работу и запчасти",
            icon: <Advantage2 />
        },
        {
            title: "Ремонт от 1 часа",
            description: "При необходимости заберем в сервис",
            icon: <Advantage3 />
        },
        {
            title: "Качественные запчасти",
            description: "У нас только проверенные поставщики",
            icon: <Advantage4 />
        },
        {
            title: "Мастера с большим опытом",
            description: "У нас мастера опытом более 20 лет (8-10мастеров)",
            icon: <Advantage5 />
        },
        {
            title: "Крупнейший сервис в Шымкенте и области",
            description: "С 2002 г. ремонтируем бытовую технику",
            icon: <Advantage6 />
        }
    ]
}
const AdvantageScreen = () => {
    return (
        <section id="advantages" className={styles.section}>
            <div className="container">
                <div className={styles.titleWrap}>

                    <h2>Наши преимущества</h2>
                    <p>Мы мастера своего дела</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.list}>
                        {
                            dataBase.list.map((item, i) =>(
                                <div key={i}
                                    className={styles.listItem}>
                                    <div className={styles.icon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.listItemContent}>
                                        <h5 className={styles.listItemContentTitle}>{item.title}</h5>
                                        <p className={styles.listItemContentDescription}>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantageScreen;
