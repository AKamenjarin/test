import React from "react";
import { Navigation } from "../components/navigation";

const menuList = [
    {
            text: "Ocjenjivanje",
            link: "/ocjenjivanje",
        },
        {
        text: "Predavanje",
            link: "/predavanje",
        },
        {
        text: "Projekt",
        link: "/projekt",
    },
    {
        text: "Rezultati",
        link: "/rezultati",
    }
]

const Blog = () => {
    <div>
        <h1>Teaching HCI</h1>
        
        <Navigation menuItems={menuItems} />

    </div>
}

export default Blog