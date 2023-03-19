import React, { Suspense } from "react";

//Importing Section
// const TopBar = import("../CommonLayout/TopBar");
import TopBar from "../CommonLayout/TopBar";
import NavBar from "../CommonLayout/NavBar";
import Subscribe from "../CommonLayout/Subscribe";
import Footer from "../CommonLayout/Footer";
import StyleSwitcher from "../CommonLayout/StyleSwitcher";
import ScrolltoTop from "../../components/ScrolltoTop";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Suspense>
                <div>
                    <TopBar />
                    <NavBar />
                    <div className="main-content">
                        <div className="page-content">{props.children}</div>
                    </div>
                    <Subscribe />
                    <ScrolltoTop />
                    <Footer />
                    <StyleSwitcher />
                </div>
            </Suspense>
        </React.Fragment>
    );
};

export default Layout;