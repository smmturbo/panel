import React from 'react'
import { PageHeader } from '../../components/interface'

class ApiDocsPage extends React.PureComponent {

  render()  {

    return (<div>

<h3>ENDPOINT</h3>
<code>https:\/\/us-central1-api-painel-as.cloudfunctions.net/v2</code>

<h2>REQUESTS</h2>

<h3>Add order</h3>

<table className="table" >
  <thead>
    <th>Parameters</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>token</td>
      <td>Your API token</td>
    </tr>
    <tr>
      <td>action</td>
      <td>add</td>
    </tr>
    <tr>
      <td>service</td>
      <td>Service ID</td>
    </tr>
    <tr>
      <td>link</td>
      <td>Link to Page/Profile/Post</td>
    </tr>
    <tr>
      <td>Quantity</td>
      <td>Needed quantity</td>
    </tr>
  </tbody>
</table>

<h4>Example response</h4>

<code>{JSON.stringify({
 "order" : "-LKJcyOzlV8s-H1fsVq9"
})}</code>

<h3>Order status</h3>

<table>
  <thead>
    <th>Parameters</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>token</td>
      <td>Your API token</td>
    </tr>
    <tr>
      <td>action</td>
      <td>status</td>
    </tr>
    <tr>
      <td>order</td>
      <td>Order ID</td>
    </tr>
  </tbody>
</table>

<h4>Example response</h4>

<code>{JSON.stringify({
 "charge": 0.38,
 "status": "Completed",
 "currency": "BRL",
 "remains": ""
}, null, '\r\n')}</code>

<h3>Service list</h3>

<table>
  <thead>
    <th>Parameters</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>token</td>
      <td>Your API token</td>
    </tr>
    <tr>
      <td>action</td>
      <td>services</td>
    </tr>
  </tbody>
</table>

<h4>Example response</h4>

<code>
{JSON.stringify(
[
    {
        "service": "-LIgHn2kUvPM-A5YdlNJ",
        "name": "Visualizações Automáticas Em Vídeos No Instagram (Futuras postagens)",
        "type": "Default",
        "category": "instagram",
        "rate": 0.04,
        "min": "20",
        "max": "1000000"
    },
    {
        "service": "-LIgHsgqw4jWLWif9NMY",
        "name": "Seguidores Brasileiros No Instagram",
        "type": "Default",
        "category": "instagram",
        "rate": 10,
        "min": "100",
        "max": "20000"
    },
    {
        "service": "-LIiEwms_RFxpH4YEhs8",
        "name": "Curtidas Brasileiras Automáticas No Instagram (Futuras Postagens)",
        "type": "Default",
        "category": "instagram",
        "rate": 1,
        "min": "20",
        "max": "70000"
    }
])}
</code>

<h3>Get Balance</h3>

<table>
  <thead>
    <th>Parameters</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>token</td>
      <td>Your API token</td>
    </tr>
    <tr>
      <td>action</td>
      <td>balance</td>
    </tr>
  </tbody>
</table>

<h4>Example response</h4>

<code>{JSON.stringify(
{
    "balance": 448.45,
    "currency": "BRL"
})}
</code>

</div>)
  }
}

export default ApiDocsPage
