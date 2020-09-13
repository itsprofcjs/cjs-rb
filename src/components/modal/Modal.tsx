import React, { HTMLAttributes, useState, useCallback } from 'react';

import { Button } from '../../elements/buttons/button/Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isClipped?: boolean;
    onClose: Function;
}

export const Modal = ({ children, className = '', isActive = false, isClipped = false, onClose, ...props }: Props) => {
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
        <article className={clsName} {...props}>
            <section className="modal-background"></section>
            <section className="modal-content">{children}</section>

            <Button aria-label="close" onClick={onModalClose} prefix="modal-close" scale="large"></Button>
        </article>
    ) : null;
};
