import React, { ClassAttributes, forwardRef, HTMLAttributes, ReactNode, Ref, useCallback, useState } from 'react';

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

export const CardModalElement = (
    {
        children,
        className = '',
        footerContent,
        hasFooter = true,
        isActive = false,
        isClipped = false,
        modalTitle = '',
        onClose,
        ...props
    }: Props,
    ref: Ref<HTMLDivElement>
) => {
    let clsName = 'modal';

    const [isVisible, setIsVisible] = useState(true);

    const onCardModalClose = useCallback((e) => {
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

export const CardModal = forwardRef(CardModalElement);
