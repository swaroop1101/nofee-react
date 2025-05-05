import Header from '/src/components/Header/Header.jsx'
import Footer from '/src/components/Footer/Footer.jsx'
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'

function Layout(){

    // This code is used to scroll to top whenever the page is redirected

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on every route change
    }, [pathname]);

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;