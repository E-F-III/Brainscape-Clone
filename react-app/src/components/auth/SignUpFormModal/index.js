import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm';

import './SignUpFormModal.css'

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id='signup-button' onClick={() => setShowModal(true)}>Get Started</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
