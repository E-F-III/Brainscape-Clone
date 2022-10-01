import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal'

import DeckForm from './CreateDeckForm';

import './DeckFormModal.css'
import '../ClassPage.css'

function DeckFormModal({ classId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)} className="deck-container">
                <div id="create-deck-button-container">
                    <ion-icon name="add-outline" />
                </div>
                <div className="deck-info">
                    <div className="deck-info-top">
                        <h4 id="new-deck-label">Create New Deck</h4>
                    </div>
                </div>

            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeckForm classId={classId} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default DeckFormModal;
