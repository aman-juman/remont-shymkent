import styles from "./MainBottomScreen.module.scss";
import TimerIcon from "/public/timer.svg";
import DeviceIcon from "/public/device.svg";
import CertificateIcon from "/public/certificate.svg";
import WorkerIcon from "/public/workerIcon.svg";


const dataBase = {
    list: [
        {
            title: "2 ЧАСА",
            description: "Минимальное время ремонта",
            icon: <TimerIcon/>,
            color: "#CD1A76"
        },
        {
            title: "2450",
            description: "Отремонтированной техники",
            icon: <DeviceIcon/>,
            color: "#22264B"
        },
        {
            title: "1 год",
            description: "Гарантии на все работы",
            icon: <CertificateIcon/>,
            color: "#1A1E3B"
        }
    ]
}



const MainBottomScreen = () => {

    return (
        <div id="result" className="container">
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <div className={styles.list}>
                        {
                            dataBase.list.map((item, i) =>(
                                <div style={{background: item.color}} key={i} className={styles.listItem}>
                                    <div className={styles.listItemIcon}>
                                        {item.icon}
                                    </div>
                                    <h5 className={styles.listItemTitle}>{item.title}</h5>
                                    <p className={styles.listItemDescription}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.team}>
                        <div className={styles.teamIcon}>
                            <WorkerIcon />
                        </div>
                        <div className={styles.teamContent}>
                            <p className={styles.teamContentLabel}>
                                У нас мастера с опытом более 20лет
                            </p>
                            <p className={styles.teamContentTitle}>
                                4 бригады по 2 мастера
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainBottomScreen;