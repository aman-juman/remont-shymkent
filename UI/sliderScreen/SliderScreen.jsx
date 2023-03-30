import React, {useContext, useRef, useState} from "react";
import Image from "next/image";
import styles from "./SliderScreen.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "/public/images/slide1.jpg";
import img2 from "/public/images/slide2.jpg";
import img3 from "/public/images/slide3.jpg";

import {Autoplay, Pagination, Navigation, EffectFade} from "swiper";
import Link from "next/link";
import {motion} from "framer-motion"
import MyButton from "../../components/button/MyButton";



const dataBase = [
    {
        title: "КАЧЕСТВЕННЫЙ ремонт",
        description: "У нас высоклассные мастера и качественные запчасти",
        img: img1
    },
    {
        title: "ОПЫТНЫЕ МАСТЕРА",
        description: "У нас мастера с большим опытом 20 лет и более",
        img: img2
    },
    {
        title: "ГАРАНТИЯ НА РАБОТЫ",
        description: "Мы даем гарантию на работы и запчасти",
        img: img3
    },
]
const SliderScreen = () => {
    const data = dataBase;
    return (
        <section>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
            >
                {data.map(({title, description, img}, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                                <div className={styles.block}>
                                    <Image
                                        className={styles.img}
                                        // paceholder="blur"
                                        alt="farm"
                                        quality={80}
                                        loading="lazy"
                                        src={img} />
                                    <div className="containers">
                                        <motion.div
                                            className={styles.content}
                                            initial={{
                                                y:100,
                                                opacity: 0.5
                                            }}
                                            animate={{
                                                y: isActive ? 0 : 100,
                                                opacity: isActive ? 1 : 0
                                            }}
                                            transition={{
                                                duration: 1
                                            }}
                                        >
                                            <motion.h2
                                                initial={{
                                                    y:100,
                                                    opacity: 0.5
                                                }}
                                                animate={{
                                                    y: isActive ? 0 : 100,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                transition={{
                                                    duration: 0.8
                                                }}
                                                className={styles.title}>
                                                {title}
                                            </motion.h2>
                                            <motion.p
                                                initial={{
                                                    y:100,
                                                    opacity: 0.5
                                                }}
                                                animate={{
                                                    y: isActive ? 0 : 100,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                transition={{
                                                    duration: 1.2
                                                }}
                                                className={styles.description}>
                                                {description}
                                            </motion.p>
                                            <div className={styles.button}>
                                                <MyButton
                                                    text="Связаться с мастером"
                                                    href={`https://wa.me/77024343191?text=Меня%20интересует%20`}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default SliderScreen;
