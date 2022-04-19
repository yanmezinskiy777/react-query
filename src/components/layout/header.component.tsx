import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
    </ul>
  )
}

export default Header