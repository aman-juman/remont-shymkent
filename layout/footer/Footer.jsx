import styles from "./Footer.module.scss";
import Logo from "/public/logo.svg";
import PhoneIcon from "./icons/phone.svg";
import LocationIcon from "./icons/location.svg";
import InstagramIcon from "./icons/insta.svg";
import FacebookIcon from "./icons/fb.svg";
import LinkedinIcon from "./icons/in.svg";
import Link from "next/link";

const dataBase = {
    contacts: [
        {
            title: "+7 (777) 777-77-77",
            description: "Круглосуточно",
            href: "tel:+77766070070",
            icon: <PhoneIcon />
        },
        {
            title: "г. Шымкент, мкр Акжайык б/н",
            description: "Мы находимся",
            href: "https://goo.gl/maps/JMBfpE2t29g42yBt8",
            icon: <LocationIcon />
        }
    ],
    socials: [
        {
            title: "instagram",
            icon: <InstagramIcon />,
            href: "https://www.instagram.com/usite.store/"
        },
        {
            title: "facebook",
            icon: <FacebookIcon />,
            href: "https://www.facebook.com/people/Usitestore/100089144198140/"
        },
        {
            title: "linkedin",
            icon: <LinkedinIcon />,
            href: "https://www.linkedin.com/in/aman-juman/"
        }
    ],
    menuList: [
        {
            title: "Наши услуги",
            href: "#"
        },
        {
            title: "Наши работы",
            href: "#"
        },
        {
            title: "Консультация",
            href: "#"
        },
        {
            title: "Контакты",
            href: "#"
        }
    ],
    serviceList: [
        {
            title: "Ремонт техники",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        },
        {
            title: "Установка техники",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        },
        {
            title: "Диагностика через аппарат",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        },
        {
            title: "Замена деталей",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        },
        {
            title: "Обслуживание техники",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        },
        {
            title: "Консультация",
            href: "https://wa.me/77766070070?text=Меня%20интересует%20-Прочистка%20канализации",
        }
    ]
}
const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                  <div className={styles.content}>
                      <div className={styles.left}>
                          <div className={styles.leftTop}>
                              <p className={styles.leftTopDescription}>Выезд бригады в течение 10 минут</p>
                              <h3 className={styles.leftTopTitle}>СВЯЖИТЕСЬ С НАМИ</h3>
                          </div>
                          <div className={styles.leftBottom}>
                              <div className={styles.list}>
                                  {
                                      dataBase.contacts.map(({title, description, icon, href}, i) =>(
                                          <div key={i} className={styles.contact}>
                                              <Link href={href}>
                                                  <div className={styles.contactIcon}>
                                                      {icon}
                                                  </div>
                                              </Link>
                                              <div className={styles.contactInfo}>
                                                  <p className={styles.contactInfoDescription}>{description}</p>
                                                  <Link href={href}>
                                                    <h6 className={styles.contactInfoTitle}>{title}</h6>
                                                  </Link>
                                              </div>
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>
                      </div>
                      <div className={styles.right}>
                          <div className={styles.rightContent}>
                              <div>
                                  <Logo />
                              </div>
                              <div className={styles.rightContentRight}>
                                  <div className={styles.serviceListTitle}>Услуги</div>
                                  <ul className={styles.serviceList}>
                                      {
                                          dataBase.serviceList.map(({title, href}, i) =>(
                                              <span
                                                  key={i}
                                                  className={styles.serviceListItem}>
                                                  <Link href={href}>
                                                      {title}
                                                  </Link>
                                              </span>
                                          ))
                                      }
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </footer>
    );
};

export default Footer;
