import styles from "./PanelBottom.module.scss";
import PhoneIcon from "./icons/phone.svg";
import TelegramIcon from "./icons/telegram.svg";
import WhatsappIcon from "./icons/whatsapp.svg";


const PanelBottom = () => {
    return (
        <div className={styles.show}>
            <div className={styles.wrap}>
                <div className={styles.panel}>


                    <a className={styles.panelItem} href="tel:+77766070070">
                        <span><PhoneIcon/></span>
                        <span>ПОЗВОНИТЬ</span>
                    </a>
                    {/*<a href="https://t.me/AlamanShogun"><TelegramIcon/></a>*/}
                    {/*<a href="https://wa.me/77064107828?text=Я%20хочу%20заказать%20сайт%20и%20продвижение%20сайта"><WhatsappIcon/></a>*/}
                </div>
            </div>
        </div>
    );
};

export default PanelBottom;
