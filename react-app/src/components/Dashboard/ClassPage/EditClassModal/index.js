
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import EditClassForm from './EditClassForm';
import './EditClassModal.css'

function EditClassModal({ classId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='general-edit-buttons'>
                <ion-icon onClick={() => setShowModal(true)} name="pencil-outline"></ion-icon>

            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditClassForm classId={classId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditClassModal
