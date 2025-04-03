import {Cart} from "../Cart/Cart.tsx";
import s from './Header.module.css'
import {ModalRadix} from "../ModalRadix/ModalRadix.tsx";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.container}>
                <h3>logotype</h3>
                <Cart />
                <ModalRadix />
            </div>
        </div>
    )
}