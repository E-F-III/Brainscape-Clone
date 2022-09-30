
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import DeleteDeckForm from './DeleteDeckForm';
import './DeleteDeckModal.css'

function DeleteDeckModal({ deckId, setIsLoaded }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ion-icon onClick={() => setShowModal(true)} name="trash-outline"></ion-icon>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteDeckForm deckId={deckId} setShowModal={setShowModal} setIsLoaded={setIsLoaded} />
                </Modal>
            )}
        </>
    )
}

export default DeleteDeckModal
