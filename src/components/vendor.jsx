import React from 'react';
import {Link} from 'react-router-dom';
import {useToggleState} from '../utility/hooks';
import DataCells from './data-cells';
import OverflowIcon from './overflow-icon';
import OverflowMenu from './overflow-menu';
import EditVendor from './edit-vendor';
import EditVendorTrigger from './edit-vendor-trigger';
import Modal from './modal';
import '../css/table-row.css';

const Vendor = ({id, vendorData, editVendor, deleteVendor, updateVendors}) => {
  const {toggleState, toggleMenu} = useToggleState();

  const renderEditVendorTrigger = (open) => <EditVendorTrigger open={open} />;

  const renderEditVendorButton = () => (
    <Modal
      triggerModal={renderEditVendorTrigger}
      renderModalContent={renderEditVendor}
    />
  );

  const renderEditVendor = (close) => (
    <EditVendor
      id={id}
      vendorData={vendorData}
      updateVendors={updateVendors}
      closeForm={close}
    />
  );

  return (
    <tr className="light-font">
      <DataCells data={vendorData} />
      <td className="underline">
        <Link to={`/products/${id}`}>View</Link>
      </td>
      <OverflowIcon toggleMenu={toggleMenu} />
      {toggleState && (
        <OverflowMenu
          editButton={renderEditVendorButton()}
          deleteRow={deleteVendor}
        />
      )}
    </tr>
  );
};

export default Vendor;
