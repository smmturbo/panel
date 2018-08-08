import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const PageToolbar = ({left, right}) => {
  return (<div className="d-flex justify-content-between my-2" >
            <PageToolbarItems items={left} />
            <PageToolbarItems items={right} right={true} />
          </div>)
}

const PageToolbarItems = ({items, right }) =>  {

  if(!items)  {
    return null
  }

  const key = Math.floor(Math.random() * 1000)

  return <div className={`d-flex ${right ? 'justify-content-start' : 'justify-content-end' }` } >{ _.map(items, item => <Button className="mx-1" key={key} tag={Link} to={item.to} >{item.label}</Button> )}</div>
}

export { PageToolbar }
