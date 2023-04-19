import Script from "next/script";
import "../styles/globals.css";
import Navbar from "./Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
