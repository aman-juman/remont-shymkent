import '../styles/globals.scss';
import '../styles/burger.css';
import {createContext} from "react";
import Script from "next/script";

export const Context = createContext(null);
export default function App({ Component, pageProps }) {

  return(
      <>
          <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-C6CV9KSMQN" />
          <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-C6CV9KSMQN');`
              }}
          />
          <Script strategy="afterInteractive"            id='Yandex-metrika'
                  dangerouslySetInnerHTML={{
                      __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(93032452, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true,
    ecommerce:"dataLayer"
});
                      `
                  }}
          />

          <Component {...pageProps} />
      </>
      )

}



