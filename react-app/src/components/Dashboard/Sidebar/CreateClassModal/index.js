import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';

import ClassForm from './CreateClassForm';

import './ClassFormModal.css'

function ClassFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id="create-deck-button-container" onClick={() => setShowModal(true)}>
                <ion-icon size="large" name="add-outline" />
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ClassForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default ClassFormModal
