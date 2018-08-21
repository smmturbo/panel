import React from 'react'
import { Redirect } from 'react-router-dom'

class DashboardPage extends React.PureComponent {

  render()  {

    return <Redirect to="/orders" />

    // return (
    //   <div className="container" >
    //     <PageHeader title="Início" />
    //   </div>
    // )
  }
}

export { DashboardPage }
