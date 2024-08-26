import React from 'react'
import Navbar from "../Landingpage/Navbar/Navbar";
import Hero from "../Landingpage/Hero/Hero";
import Products from "../Landingpage/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../Landingpage/TopProducts/TopProducts";
import Banner from "../Landingpage/Banner/Banner";
import Footer from "../Landingpage/Footer/Footer";
import Popup from "../Landingpage/Popup/Popup";

const Landingpage = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Products />
            <Footer />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    )
}

export default Landingpage