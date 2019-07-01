import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import EditItems from './edit-items'

class EditList extends Component {
  state = {
    open: false
  }

  editList = () => {
    this.setState({
      open: true
    })
  }

  closeList = () => {
    console.log('closing')
    this.setState({
      open: false
    })
  }

  render() {
    const {editList, closeList} = this
    const {open} = this.state
    const {id, date, name, lastEditedBy, deleteList} = this.props
    return (
      <div className='pointer'>
        <div className='row' onClick={editList}>
          {date ? <div className={`column`}>
            <h4 className='light-font'>{date.slice(0,10)}</h4>
          </div> : <div></div>}
          <div className={`column`}>
            <h4 className='light-font'>{name}</h4>
          </div>
          {lastEditedBy ? <div className={`column`}>
            <h4 className='light-font'>{lastEditedBy}</h4>
          </div>  : <div>last</div>}
          {deleteList && <div className={`column pointer`} onClick={() => deleteList(id)}>
            <img className='delete-icon' src='/img/delete.png'/>
            <h4 className='delete-txt light-font'>Delete this list</h4>
          </div>}
        </div>
        {open && <EditItems listId={id} closeList={closeList}/>}
      </div>
    )
  }
}

export default EditList