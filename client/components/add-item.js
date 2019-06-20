import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemForm from './item-form'
import {addItem} from '../store'

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
    const {createItem} = this.props
    try {
      const item = await createItem({
        name: name.value,
        onHand: onHand.value,
        par: par.value,
        orderQty: orderQty.value
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
          <ItemForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            item={this.state}
          />
        ):(
          <div className='add-container pointer' onClick={handleClick} >
            <img className='add-btn' src='/img/add.png' />
            <h3> Add Item </h3>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.user,
  items: state.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createItem: itemData => dispatch(addItem(itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)