
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import DeleteDeckForm from './DeleteDeckForm';
import './DeleteDeckModal.css'

function DeleteDeckModal({ deckId, setIsLoaded }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='general-edit-buttons'>
                <ion-icon onClick={() => setShowModal(true)} name="trash-outline"></ion-icon>

            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteDeckForm deckId={deckId} setShowModal={setShowModal} setIsLoaded={setIsLoaded} />
                </Modal>
            )}
        </>
    )
}

export default DeleteDeckModal
