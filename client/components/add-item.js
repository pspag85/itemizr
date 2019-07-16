import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddItemForm from './add-item-form'
import {addItem} from '../store'
import '../css/add-item.css'

class AddItem extends Component {
  state = {
    open: true,
    name: '',
    onHand: 0,
    par: 0,
    orderQty: 0
  }

  componentDidMount() {
    const {items, newItem, open} = this.props
    if(items.length > 0) {
      this.setState({open: false})
    }
    if(newItem) {
      this.setState({open})      
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, onHand, par, orderQty} = event.target
    const {createItem, listId} = this.props
    createItem({
      name: name.value,
      onHand: onHand.value,
      par: par.value,
      orderQty: orderQty.value,
      listId: listId
    })
    this.setState({open: false})
  }

  render(){
    const {handleSubmit, handleChange} = this
    const {open} = this.state
    return(
      <div>
        {open && (
          <AddItemForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
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