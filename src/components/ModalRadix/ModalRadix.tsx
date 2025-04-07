import {Cross2Icon} from '@radix-ui/react-icons';
import s from './ModalRadix.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';

type ModalSize = 'small' | 'medium' | 'large';

type Props = {
    open: boolean
    onClose: () => void
    modalTitle: string
    size?: ModalSize
} & ComponentPropsWithoutRef<'div'>

export const ModalRadix = ({size = 'medium', open, modalTitle, onClose, children, className, ...rest}: Props) => (
    <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
        <Dialog.Portal>
            <Dialog.Overlay className={s.Overlay}/>
            <Dialog.Content className={clsx(s.Content, s[size], modalTitle, className)}>
                <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
                <hr/>
                {children}
                <Dialog.Close asChild>
                    <button className={s.IconButton} aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);
