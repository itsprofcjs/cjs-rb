import { HTMLAttributes, useState, useCallback, Ref, forwardRef } from 'react';

import { Button } from '../../elements/buttons/button/Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isClipped?: boolean;
    onClose: Function;
}

export const ModalElement = (
    { children, className = '', isActive = false, isClipped = false, onClose, ...props }: Props,
    ref: Ref<HTMLDivElement>
) => {
    let clsName = 'modal';

    const [isVisible, setIsVisible] = useState(true);

    const onModalClose = useCallback((e) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    if (isActive) {
        clsName += ' is-active ';
    }

    if (isClipped) {
        clsName += ' is-clipped';
    }

    clsName += ' ' + className;

    return isVisible ? (
        <article className={clsName} ref={ref} {...props}>
            <section className="modal-background"></section>
            <section className="modal-content">{children}</section>

            <Button aria-label="close" onClick={onModalClose} prefix="modal-close" scale="large"></Button>
        </article>
    ) : null;
};

export const Modal = forwardRef(ModalElement);
