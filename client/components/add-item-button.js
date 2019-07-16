import React, {Component} from 'react'
import AddItem from './add-item'
import '../css/add-item.css'

class AddItemButton extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({open: !this.state.open})
  }

  render(){
    const {handleClick} = this
    const {open} = this.state
    return (
      <div>
        {open && <AddItem open={true} newItem={true} />}
        <div id='add-item' className='add-item pointer row' onClick={handleClick} >
          <img className='add-item-btn' src='/img/add.png' />
          <h5> Add new item </h5>
        </div>
      </div>
    )
  }
}

export default AddItemButton