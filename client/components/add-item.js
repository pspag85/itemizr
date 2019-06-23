import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddItemForm from './add-item-form'
import {addItem} from '../store'
import '../css/add-item.css'

class AddItem extends Component {
  state = {
    open: false,
    name: '',
    onHand: 0,
    par: 0,
    orderQty: 0
  }

  handleClick = () => {
    this.setState({open: true})
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {name, onHand, par, orderQty} = event.target
    const {createItem, listId} = this.props
    try {
      const item = await createItem({
        name: name.value,
        onHand: onHand.value,
        par: par.value,
        orderQty: orderQty.value,
        listId: listId
      })
      this.setState({open: false})
    } catch(err) {
      console.error(err)
    }
  }

  render(){
    const {handleSubmit, handleChange, handleClick} = this
    const {open} = this.state
    return(
      <div>
        {open ? (
          <AddItemForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            item={this.state}
          />
        ):(
          <div id='add-item' className='add-item pointer row' onClick={handleClick} >
            <img className='add-item-btn' src='/img/add.png' />
            <h5> Add new item </h5>
          </div>
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