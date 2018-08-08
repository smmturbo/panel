import React from 'react'
import { NavLink } from 'react-router-dom'

function TabLink({exact, to, children}) {

  let isTabActive = false
  let testTab = (match) => {
    if(match && match.isExact) {
      isTabActive = true
    }
    else {
      isTabActive = false
    }
  }

  return (
    <li className={isTabActive ? 'is-active' : null} >
      <NavLink {...exact} to={to} isActive={testTab}  >{children}</NavLink>
    </li>
  )
}

export { TabLink }
