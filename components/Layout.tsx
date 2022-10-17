import React from "react";
import NavbarComp from "./NavbarComp";
// children component type
interface ChildProps {
    children: JSX.Element;
}

// display the navbar on every page

const Layout = ({ children }: ChildProps) => {
    return (
        <>
            <NavbarComp />
            {children}
        </>
    );
};

export default Layout;
