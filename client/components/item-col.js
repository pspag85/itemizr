import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
const $ = require('jquery')
import {updateItem} from '../store'

class ItemCol extends Component {
  state = {
    id: this.props.id,
    value: this.props.value
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {id} = this.state
    const {input, putItem} = this.props
    const {value} = event.target//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    const itemData = {}
    itemData[input] = value
    const item = putItem(id, itemData)
    if(item) {
      $(() => {$('input').blur()})
    }
  }

  render(){
    const {handleSubmit, handleChange} = this
    const {input} = this.props
    return input && (
      <Fragment>
        <form className='item-form' onSubmit={handleSubmit} onBlur={handleSubmit}>
         <input
            type='text'
            value={this.state.value}
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