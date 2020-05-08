import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from './product-form';
import FormButtons from './form-buttons';

const EditProduct = ({id, currentState, updateProducts, closeForm}) => {
  const [userMsg, setUserMsg] = useState('');
  const [product, setProduct] = useState(currentState);

  const displayUserMsg = (msg) => setUserMsg(msg);

  const editProduct = async (productData) => {
    const vendor = {name: productData.vendor};
    try {
      await axios.put('/api/products', {id, ...productData});
      updateProducts({id, ...productData, vendor});
    } catch (err) {
      console.error(err);
    }
  };

  const validateVendor = (productData) => {
    if (!productData.vendor) {
      // TODO: Make 'Vendor required' bold. Make 'vendors' a link to /vendors
      displayUserMsg(
        'Vendor required. Go to vendors to create a vendor for this product'
      );
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setProduct({...product, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validated = validateVendor(product);
    if (validated) {
      editProduct(product);
      closeForm();
    }
  };

  return (
    <tr>
      <td colSpan="8">
        <ProductForm
          product={product}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userMsg={userMsg}
          formButtons={
            <FormButtons
              submitText="Save"
              handleSubmit={handleSubmit}
              closeForm={closeForm}
            />
          }
        />
      </td>
    </tr>
  );
};

export default EditProduct;
