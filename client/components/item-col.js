import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
const $ = require('jquery')
import {updateItem} from '../store'

class ItemCol extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    onHand: this.props.onHand,
    par: this.props.par,
    orderQty: this.props.orderQty
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {id} = this.state
    const {input, putItem} = this.props
    const value = event.target.querySelector('input').value //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    const itemData = {}
    itemData[input] = value
    const item = putItem(id, itemData)
    if(item) {
      $(() => {$('input').blur()})
      const {name, onHand, par, orderQty} = item
      this.setState({
        id,
        name,
        onHand,
        par,
        orderQty
      })
    }
  }

  render(){
    const {handleSubmit, handleChange} = this
    const {input} = this.props
    const name = input ? input : ''
    return(
      <Fragment>
        <form className='item-form' onSubmit={handleSubmit}>
         <input
            type='text' name={name}
            value={this.state[name] }
            onChange={handleChange}
          />
       </form>
      </Fragment>
    )
  }
}

const mapStateToProps = ({user}) => ({user})

const getItemId = ({id}) => id

const mapDispatchToProps = (dispatch, ownProps) => ({
  putItem: (itemId, itemData) => dispatch(updateItem(itemId, itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemCol)