import React from 'react'
import Popup from 'reactjs-popup'
import ModalTrigger from './modal-trigger'

const Modal = ({trigger, renderModalContent}) => (
  <Popup
    trigger={trigger} modal>
    {close => renderModalContent(close)}
  </Popup>
)

export default Modal
