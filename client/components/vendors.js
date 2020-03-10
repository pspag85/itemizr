import React, {Fragment, useEffect} from 'react'
import ColHeader from './col-header'
import ListRow from './list-row';
import useApiRequest from '../api/request';

const Vendors = ({pdateData, deleteRow}) => {
  const [addFormState, setAddFormState] = useState(false)

  const [{ status, response }, makeRequest] = useApiRequest('/api/products')
  useEffect(() => {
    makeRequest()
  }, [])


  const openAddForm = () => setAddFormState(true)
  const closeAddForm = () => setAddFormState(false)

  return (
    <Fragment>
      <UserBar showNav={true} />
      <div className='page-pdg'>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['Name', 'Email', 'Phone', 'Products']} />
        </div>
        <div className='row-container'>
          {response && response.map(({id, name, email, phone}) => (
            <ListRow
              key={id + Math.random()}
              id={id}
              rowData={{name, email, phone}}
              updateData={updateData}
              deleteRow={deleteRow}
            />
          ))}
        </div>
        {addFormState
          ? <AddDataForm model={model} insertData={insertData} closeForm={closeAddForm} />
          : <AddDataButton openForm={openAddForm} dataName={model} />
        }
      </div>
    </Fragment>
  )
}

export default Vendors
