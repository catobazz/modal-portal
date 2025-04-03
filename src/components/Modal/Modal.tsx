import s from './Modal.module.css'
import {ReactNode} from 'react';
import {createPortal} from "react-dom";

type Props = {
    open: boolean
    onClose?: () => void
    title: string
    children: ReactNode
}

export const Modal = ({onClose, open, title, children}: Props) => {
    return (
        <>
            {open &&
                <>
                    {createPortal(
                        <div className={s.overlay}>
                            <div className={s.content}>
                                <h3 className={s.title}>{title}</h3>
                                <hr/>
                                {children}
                                <button className={s.closeIcon} onClick={onClose}>
                                    x
                                </button>
                            </div>
                        </div>,
                        document.body)}
                </>

            }
        </>
    )
}