import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchData} from '../../utility/helpers'
import UserBar from './user-bar';
import ColHeader from './col-header'
import Vendor from './vendor'
import VendorForm from './vendor-form';
import AddVendorButton from './add-vendor-button';

const Vendors = withRouter(({user, history}) => {
  if(!user.id) history.push('/')

  const [vendors, setVendors] = useState([])
  const [formState, setFormState] = useState(false)

  const loadVendors = () => fetchData('vendors', setVendors)

  useEffect(() => {
    loadVendors()
  }, [])

  const updateVendors = newVendor => setVendors([...vendors, newVendor])
  const addVendor = () => setFormState(true)
  const closeVendorForm = () => setFormState(false)

  return (
    <Fragment>
      <UserBar showNav={true} />
      <div className='page-pdg'>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['Name', 'Email', 'Phone', 'Products']} />
        </div>
        {!vendors ? null
        : <div className='row-container'>
            {vendors.map(({id, name, email, phone}) => <Vendor
              key={name + Math.random()}
              className='vendor'
              id={id}
              name={name}
              email={email}
              phone={phone}
            />)}
          </div>
        }
        {formState ? <VendorForm updateVendors={updateVendors} closeVendorForm={closeVendorForm} />
        : <AddVendorButton addVendor={addVendor} />}
      </div>
    </Fragment>
  )
})

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(Vendors)

