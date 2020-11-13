import React from 'react';
import PropTypes from 'prop-types';
import Button from './input/Button';

function Modal(props) {
    const modal = props.isOpen ? 'modal modalOpen' : 'modal modalClosed';
    const modalBackground = props.isOpen ? 'modalBackground modalOpen' : 'modalBackground modalClosed';

    return (
        <div className={modalBackground}>
            <div className={modal}>
                <div className='modalContent'>
                    {props.children}
                </div>
                <div className='modalControl'>
                    <Button className='modalButton' onClick={props.onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;
