import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import DeleteClassForm from './DeleteClassForm';

import './DeleteClassModal.css'

function DeleteClassModal({ classId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id="create-class-button-container" onClick={() => setShowModal(true)}>
                <ion-icon name="close-outline"></ion-icon>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteClassForm setShowModal={setShowModal} classId={classId}/>
                </Modal>
            )}
        </>
    )
}

export default DeleteClassModal;
