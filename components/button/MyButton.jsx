import styles from "./MyButton.module.scss";
import Link from "next/link";
import cn from "classnames";
import MasterIcon from "./masterIcon.svg";
const MyButton = ({
                    children,
                    href = "https://wa.me/77766070070?text=Мне%20нужна%20прочистка%20канализации",
                    round = false,
                    variant = "primary",
                    size = "medium",
                    icon = false,
                    text = "Вызвать Мастера",
                }) => {
    return (
            <Link
            href={href}
            className={styles.link}
            >
            <button
                className={cn(styles.btn, {
                    [styles.primary]: variant === "primary",
                    [styles.secondary]: variant === "secondary",
                    [styles.sizeLg]: size === "large",
                    [styles.round]: round
                })}>
                {icon && <MasterIcon/> }
                {text}
            </button>
        </Link>
    );
};

export default MyButton;
