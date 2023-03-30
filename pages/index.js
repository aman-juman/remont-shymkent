import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import PanelBottom from "../components/PanelBottom/PanelBottom";
import Menu from "../components/Menu";
import {
    AdvantageScreen,
    AdvantageShortScreen,
    MainBottomScreen,
    MainScreen,
    MainServiceScreen,
    MapScreen,
    ServiceScreen,
    SliderScreen
} from "../UI";
import ServicePlaceScreen from "../UI/servicePlaceScreen/ServicePlaceScreen";
import CallOrder from "../UI/callOrder/CallOrder";


// import firebase from 'firebase/app';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const title = "Ремонт кондиционеров в Шымкенте | Remont Shymkent";
    const description = "Ремонт и установка Кондиционеров, Стиральных машин и Холодильников со скидкой. Бесплатная диагностика и вызов мастера. Звоните ☎ 8(707) 167-16-82"
  return (
    <>
      <Head>
          <meta charSet="utf-8"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
          <meta name="yandex-verification" content="9ce1544c18473af1" />
          <meta property="vk:title" content={title}/>
          <meta property="vk:text" content={description}/>
          <meta property="vk:url" content="https://remont-shymkent.kz" />
          <meta name="theme-color" content="#FFFFFF"/>

          <meta name="Author" content="https://ustudio.kz/" />
      </Head>
<div>
    <div className="burger-menu">
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
    <Header />
    <MainScreen />
    <MainBottomScreen />
    <ServiceScreen />
    <AdvantageShortScreen />
    <AdvantageScreen />
    <SliderScreen />
    <MainServiceScreen/>
    <ServicePlaceScreen />
    <CallOrder />
    <MapScreen />
    <Footer />
    <PanelBottom />
</div>
    </>
  )
}

