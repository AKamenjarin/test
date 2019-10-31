import { React } from "react";
import { Navigation } from "./navigation";

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

const Layout = () => {
  return(
    <div>
        <Navigation menuItems={menuItems} />      
    </div>
  )

}

export default Layout
