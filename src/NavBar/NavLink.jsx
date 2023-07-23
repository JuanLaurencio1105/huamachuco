import React from 'react'
import { Link, useHref, useLocation } from 'react-router-dom'
const NavLink = ({ to, text, icon, onClick }) => {
  const location = useLocation()
  const path = location.pathname === to ? 'active' : ''
  const href = useHref()
  return (
    <li>
      <Link
        to={to}
        active={path}
        onClick={onClick}
        className={`flex flex-col items-center hover:text-yellow transition px-4`}
        aria-current="page"
      >
        <span className={`${href === to ? 'text-yellow' : ''}`}>{icon}</span>
        <p className={`font-semibold text-base ${href === to ? 'border-b-2 border-blue text-yellow' : ''}`}>{text.toUpperCase()}</p>
      </Link>
    </li>
  )
}

export default NavLink