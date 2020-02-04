import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserBar from './user-bar'
import List from './list'
import axios from 'axios'
import '../css/lists.css'

const Lists = withRouter(() => {
  const [lists, setLists] = useState([])

  const getLists = async () => {
    try {
      const {data} = await axios.get(`/api/lists/`)
      setLists(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getLists()
  }, [])

  const deleteList = async (id) => {
    try {
      await axios.delete(`/api/lists/${id}`)
      const updatedLists = lists.filter(list => list.id !== id)
      setLists(updatedLists)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <UserBar showNav={true}/>
      <div id='lists-page' className='page-pdg'>
        <div className='tp-mrg-20 font-8'>
          <h4>Search</h4>
        </div>
        {lists.length < 1 || !Array.isArray(lists) ? <h4>Start by creating your first list</h4>
        : <Fragment>
            <div className='row-container bg-white'>
              {lists.map(({id, name, date, supplierId}) => (
                <List key={Math.random() + id}
                  id={id}
                  name={name}
                  supplierId={supplierId}
                  deleteList={deleteList}
                />
              ))}
            </div>
          </Fragment>
        }
      </div>
    </Fragment>
  )
})

export default Lists
