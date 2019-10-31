import { React } from "react"
import { Link } from "gatsby";

const Navigation = (menuItems) => {
    return (
        <ul>
            {menuItems.map(({link, text}) => (
                <li>
                    <Link to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    )
}

