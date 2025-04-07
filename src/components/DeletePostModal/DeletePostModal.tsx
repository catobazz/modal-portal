import { ModalRadix } from "../ModalRadix/ModalRadix"
import {Button} from '../Button/Button.tsx';

type Props = {
    open: boolean
    onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
    return (
        <ModalRadix open={open} onClose={onClose} modalTitle={'Delete Post'} size={'small'}>
            Are you sure you want to delete this post?
            <div>
                {/*Будем использовать обычные кнопки*/}
                <Button onClick={onClose}>Yes</Button>
                <Button variant={'outlined'} onClick={onClose}>No</Button>
            </div>
        </ModalRadix>
    )
}