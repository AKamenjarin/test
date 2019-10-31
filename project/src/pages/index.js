import React from "react";
import { Link } from "gatsby"

const IndexPage = () => (
<div>
    <h1>Teaching HCI</h1>
    <h2>Examples:</h2>
    <ul>
        <li>
            <Link to="./examples/example-1.js">Example 1</Link>
        </li>
        <li>
            <Link to="./examples/example-2.js">Example 2</Link>
        </li>
        <li>
            <Link to="./examples/example-3.js">Example 3</Link>
        </li>
    </ul>
</div>
)
export default IndexPage