import styles from "./AdvantageShortScreen.module.scss";
import Icon1 from "./icons/icon1.svg";
import Icon2 from "./icons/icon2.svg";
import Icon3 from "./icons/icon3.svg";


const data =[
    {
        title: "Оперативный выезд 24/7!",
        icon: <Icon1/>
    },
    {
        title: "Гарантия качества и результата",
        icon: <Icon2/>
    },
    {
        title: "Квалифицированные специалисты",
        icon: <Icon3/>
    }
]
const AdvantageShortScreen = () => {
    return (
        <section id="service" className={styles.section}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.list}>
                        {
                            data.map((item, i) =>(
                                <div
                                    key={i}
                                    className={styles.listItem}>
                                    <span>{item.icon}</span>
                                    <span className={styles.listItemTitle}>{item.title}</span>
                                </div>
                            ))
                        }
                    </div>

                </div>



                {/*<div className={styles.content}>*/}
                {/*    <div className={styles.top}>*/}
                {/*        <h5 className={styles.title}>{dataBase.title}</h5>*/}
                {/*        <p className={styles.description}>{dataBase.description}</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.list}>*/}
                {/*        {*/}
                {/*            dataBase.list.map(({title, description, icon}, i) => (*/}
                {/*                <div key={i} className={styles.listItem}>*/}
                {/*                    <div className={styles.listItemIcon}>{icon}</div>*/}
                {/*                    <div className={styles.listItemTitle}>{title}</div>*/}
                {/*                    <div className={styles.listItemDescription}>{description}</div>*/}
                {/*                </div>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default AdvantageShortScreen;
