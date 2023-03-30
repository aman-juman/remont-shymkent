import styles from "./PanelBottom.module.scss";
import PhoneIcon from "./icons/phone.svg";
import TelegramIcon from "./icons/telegram.svg";
import WhatsappIcon from "./icons/whatsapp.svg";


const PanelBottom = () => {
    return (
        <div className={styles.show}>
            <div className={styles.wrap}>
                <div className={styles.panel}>


                    <a className={styles.panelItem} href="tel:+77071671682">
                        <span><PhoneIcon/></span>
                        <span>ПОЗВОНИТЬ</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PanelBottom;
