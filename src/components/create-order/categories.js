import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import _ from 'lodash'

class CreateOrderCategoryList extends React.PureComponent {

  state = { category: {} }

  render()  {

    const { categories } = this.props

    return (<div className="my-3 text-left"
              style={{overflow: 'scroll',
                      overflowX: 'scroll',
                      overflowY: 'hidden'
                    }}
              >
              <ButtonGroup>
                <Button key='pocl-all' color="primary" outline={!!this.state.category.id} onClick={ () => this._handleClick({}) } >Todos</Button>
                { _.map(categories, category => <Button key={`pocl-${category.id}`} color="primary" outline={this.state.category.id !== category.id} onClick={() => this._handleClick(category)} >{category.label}</Button> ) }
              </ButtonGroup>
            </div>)
  }

  _handleClick = (category) =>  {
    this.setState({category})
    this.props.handleClick(category)
  }
}

export { CreateOrderCategoryList }
