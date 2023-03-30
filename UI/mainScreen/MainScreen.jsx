import styles from "./MainScreen.module.scss";
import Card from "../../components/card/Card";
import Image from "next/image";
import MyButton from "../../components/button/MyButton";
import CallOrder from "../../components/callOrder/CallOrder";
import img from "/public/mainScreenImg.png";
import SettingIcon from "/public/setting.svg";

const dataBase = {
    title: "Прочистка канализации\n",
    list: ["Холодильник", "Кондиционер", "Стиральная машина"],
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
                            <span>Приедем к Вам через 20 минут, после звонка!</span>
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

