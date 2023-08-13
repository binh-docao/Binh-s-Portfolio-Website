import Aos from "aos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/scss/style.scss";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "../components/switch/ThemeSwitch";
import { Analytics } from '@vercel/analytics/react';
 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="tokyo_tm_all_wrap">
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeSwitch /> {/* Render ThemeSwitch on every page */}
        <Component {...pageProps} /> {/* Main next component pageprops */}
        <Analytics />
      </ThemeProvider>

      <ToastContainer /> {/* End toast container for email send notification */}
    </div>
  );
}
