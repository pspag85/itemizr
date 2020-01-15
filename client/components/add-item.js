import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddItemForm from './add-item-form'
import {addItem} from '../store'
import '../css/add-item.css'

class AddItem extends Component {
  state = {
    name: '',
    onHand: '',
    par: '',
    orderQty: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, onHand, par, orderQty} = event.target
    const {createItem, listId, closeForm} = this.props
    createItem({
      name: name.value,
      onHand: onHand.value,
      par: par.value,
      orderQty: orderQty.value,
      listId: listId
    })
    closeForm()
  }

  render(){
    const {handleChange, handleSubmit} = this
    const {open} = this.props
    return(
      <div>
        {open && (
          <AddItemForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            item={this.state}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({user, items}) => ({user, items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createItem: itemData => dispatch(addItem(itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)