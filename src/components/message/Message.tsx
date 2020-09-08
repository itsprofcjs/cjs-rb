import React, { HTMLAttributes, ReactNode, MouseEventHandler, useCallback, useState } from 'react';

import { ColorClass, getColorClass } from '../../utils/colorClass';
import { SizeClass, getSizeClass } from '../../utils/sizeClass';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    headerContent?: ReactNode;
    isLight?: boolean;
    kind?: ColorClass;
    noHeader?: boolean;
    /**
     * Callback when close notification is clicked
     */
    onClose?: Function;
    scale?: SizeClass;
}

export const Message = ({
    children,
    className = '',
    headerContent = '',
    isLight = false,
    kind = 'default',
    noHeader = false,
    onClose = () => {},
    scale = 'default',
    ...props
}: Props) => {
    const [isVisible, setIsVisible] = useState(true);

    let clsName = 'message ';

    clsName += getColorClass(kind, isLight);

    clsName += getSizeClass(scale);

    clsName += ' ' + className;

    clsName = clsName.trim();

    const onMessageClose = useCallback((e) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    return isVisible ? (
        <article className={clsName} {...props}>
            {!noHeader && (
                <section className="message-header">
                    <p>{headerContent}</p>
                    <button aria-label="delete" className="delete" onClick={onMessageClose}></button>
                </section>
            )}
            <section className="message-body">{children}</section>
        </article>
    ) : null;
};
