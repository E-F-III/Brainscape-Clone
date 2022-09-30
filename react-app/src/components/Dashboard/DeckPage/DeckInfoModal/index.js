
import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import DeckInfo from './DeckInfo'
import './DeckInfoModal.css'

function DeckInfoModal({ deckId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ion-icon onClick={() => setShowModal(true)} name="information-circle-outline"></ion-icon>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeckInfo deckId={deckId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default DeckInfoModal
