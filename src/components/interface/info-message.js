import React from 'react'

function InfoMessage({icon, type, children}) {
  return (
    <div className={`help ${type ? type : 'info' }`} >
      <span className="icon" ><i className={`fas fa-${icon}`} ></i></span>
      <span>{children}</span>
    </div>
  )
}

export { InfoMessage }
