import React, { ClassAttributes, HTMLAttributes, ReactNode, useCallback, useState } from 'react';

import { Button } from '../../../elements/buttons/button/Button';

export const demoFooter: ReactNode = (
    <>
        <Button kind="dark" isOutlined>
            Cancel
        </Button>
        <Button kind="primary"> Save Changes </Button>
    </>
);

export interface Props extends ClassAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
    footerContent: ReactNode;
    hasFooter?: boolean;
    isActive?: boolean;
    isClipped?: boolean;
    modalTitle?: ReactNode;
    onClose: Function;
}

export const CardModal = ({
    children,
    className = '',
    footerContent,
    hasFooter = true,
    isActive = false,
    isClipped = false,
    modalTitle = '',
    onClose,
    ...props
}: Props) => {
    let clsName = 'modal';

    const [isVisible, setIsVisible] = useState(true);

    if (isActive) {
        clsName += ' is-active ';
    }

    if (isClipped) {
        clsName += ' is-clipped';
    }

    clsName += ' ' + className;

    const onCardModalClose = useCallback((e) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    return isVisible ? (
        <article className={clsName} {...props}>
            <section className="modal-background"></section>
            <section className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{modalTitle}</p>
                    <Button aria-label="close" isDelete onClick={onCardModalClose} />
                </header>
                <section className="modal-card-body">{children}</section>
                {hasFooter && <footer className="modal-card-foot"> {footerContent}</footer>}
            </section>
        </article>
    ) : null;
};
