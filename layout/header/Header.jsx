import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "/public/logo.svg";
import Navbar from "./Navbar";

const Header = () => {



    return (
        <header className={styles.header}>
            <div className={`${styles.topBar} container`}>
                <Link href="#"><Logo className={styles.logo}/></Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;
