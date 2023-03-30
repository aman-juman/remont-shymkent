import styles from "./MapScreen.module.scss";
const MapScreen = () => {
    return (
        <section className={styles.section}>
            <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2908620756166!2d69.61912261581811!3d42.357640179186966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91c8536643233%3A0x34fb4d7dd2c08f57!2sArgynbekova%20St%2C%20Shymkent!5e0!3m2!1sen!2skz!4v1679478053628!5m2!1sen!2skz"
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

