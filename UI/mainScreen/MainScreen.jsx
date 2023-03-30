import styles from "./MainScreen.module.scss";
import MyButton from "../../components/button/MyButton";
import SettingIcon from "/public/setting.svg";

const dataBase = {
    title: "Ремонт и Установка",
    list: ["Холодильника", "Кондиционера", "Стиральной машины"],
    description: "в Шымкенте и Туркестанской области"
}
const MainScreen = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrap}>
                <div className="container">
                    <div className={styles.content}>

                        <h2 className={styles.contentTitle}>
                            РЕМОНТ <span>и установка</span>
                        </h2>
                        <ul className={styles.contentList}>
                            {
                                dataBase.list.map((item, i) =>(
                                    <li key={i} className={styles.contentListItem}>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={styles.row}>
                            <MyButton  />
                            <span>Приедем к Вам через 30 минут, после звонка!</span>
                        </div>

                        <div className={styles.settingIcon}>
                            <SettingIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;

