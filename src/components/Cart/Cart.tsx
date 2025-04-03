import {Modal} from '../Modal/Modal.tsx';
import {useState} from 'react';

export const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Cart</button>
            <Modal title={'Card'} open={showModal} onClose={() => setShowModal(false)}>
                <ul>
                    <li>1 товар</li>
                    <li>2 товар</li>
                    <li>3 товар</li>
                </ul>
            </Modal>
        </>
    )
}