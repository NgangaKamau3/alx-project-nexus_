import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ComponentProps } from "@/interfaces";

const Layout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <div className="w-4/5 m-auto">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;