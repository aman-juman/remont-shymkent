import styles from "./ServiceScreen.module.scss";
import Image from "next/image";
import img1 from "./images/serviceImg1.jpg";
import img2 from "./images/serviceImg2.jpg";
import img3 from "./images/serviceImg3.jpg";
import img4 from "./images/serviceImg4.jpg";
import img5 from "./images/serviceImg5.jpg";
import img6 from "./images/serviceImg6.jpg";
import Link from "next/link";

const data =[
    {
        title: "Кондиционер",
        description: "Вызов мастера и диагностика бесплатно",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20-Механическая%20прочистка%20труб",
        image: img1,
        price: "10 000",
        list: ["Ремонт или установка", "Заправка фреона", "Замена деталей", "Ремонт датчиков", "Ремонт любой сложности"]
    },
    {
        title: "Стиральная машина",
        description: "Вызов мастера и диагностика бесплатно",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20-Механическая%20прочистка%20труб",
        image: img2,
        price: "5 000",
        list: ["Ремонт или установка", "Ремонт деталей", "Замена деталей", "Ремонт датчиков", "Ремонт любой сложности"]
    },
    {
        title: "Холодильник",
        description: "Вызов мастера и диагностика бесплатно",
        href: "https://wa.me/77766070070?text=Меня%20интересует%20Прочистка%20канализации%20-Механическая%20прочистка%20труб",
        image: img3,
        price: "6 000",
        list: ["Ремонт или установка", "Заправка фреона", "Замена деталей", "Ремонт датчиков", "Ремонт любой сложности"]
    }
    ];
const ServiceScreen = () => {
    return (
        <section id="service" className={styles.section}>
            <div className="container">
                <div className={styles.titleWrap}>

                    <h2>Наши услуги</h2>
                    <p>Мастер приедет к вам в удобное время, бесплатно продиагностирует поломку и назовет точную цену ремонта</p>
                </div>


                <div className={styles.list}>
                    {
                        data.map((item, i) =>(
                            <div key={i}
                                 className={styles.wrapItem}
                            >
                               <div className={styles.listItem}>
                                   <div className={styles.listItemTop}>
                                       <Image quality={80} width={500} height={250} src={item.image} />
                                   </div>
                                   <div className={styles.listItemPrice}>
                                       <span>от</span>{item.price} ₸
                                   </div>
                                   <div className={styles.listItemBottom}>
                                       <h4 className={styles.listItemBottomTitle}>{item.title}</h4>
                                       <p className={styles.listItemBottomDescription}>{item.description}</p>
                                       <ul className={styles.listItemBottomList}>
                                           {
                                               item.list.map((el, index) =>(
                                                   <li key={index}>{el}</li>
                                               ))
                                           }
                                       </ul>
                                   </div>
                                   <Link href={item.href}>
                                       <button className={styles.button}>
                                           ЗАКАЗАТЬ
                                       </button>
                                   </Link>
                               </div>
                            </div>
                        ))
                    }

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

export default ServiceScreen;
