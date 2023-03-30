import styles from "./MapScreen.module.scss";
const MapScreen = () => {
    return (
        <section className={styles.section}>
            <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.6255673477289!2d69.58261202936094!3d42.395748499999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a903524e71694d%3A0x64f115d3d3fe8d10!2z0KPQu9C40YbQsCDQnNGL0L3QsdCw0LXQsiA2OSwgU2h5bWtlbnQgMTYwMDIz!5e0!3m2!1sen!2skz!4v1680215448746!5m2!1sen!2skz"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </section>
    );
};

export default MapScreen;

