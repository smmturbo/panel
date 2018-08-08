import React from 'react'

const PageHeader = ({title, subtitle}) => {

    return (
      <div className="my-2" >
        <h2 className="title">{title}</h2>
        { subtitle ? <p className="lead" >{subtitle}</p> : '' }
      </div>
    )
}

export { PageHeader }
