
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import EditDeckForm from './EditDeckForm'
import './EditDeckModal.css'

function EditDeckModal({ deckId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ion-icon onClick={() => setShowModal(true)} name="pencil-outline"></ion-icon>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditDeckForm deckId={deckId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditDeckModal
