import React from 'react'
import Popup from 'reactjs-popup'
import ModalTrigger from './modal-trigger'

const Modal = ({triggerModal, renderModalContent}) => (
  <Popup
    trigger={triggerModal} modal>
    {close => renderModalContent(close)}
  </Popup>
)

export default Modal
