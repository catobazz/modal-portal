import {Modal} from '../Modal/Modal.tsx';
import {useState} from 'react';

export const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Cart</button>
            <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
        </>
    )
}