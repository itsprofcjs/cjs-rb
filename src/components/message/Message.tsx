import React, { ClassAttributes, HTMLAttributes, ReactNode, useCallback, useState } from 'react';

import { getColorClass, ColorClass } from '../../utils/colorClass';
import { getSizeClass, SizeClass } from '../../utils/sizeClass';

export interface Props extends ClassAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
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
    let clsName = 'message ';

    const [isVisible, setIsVisible] = useState(true);

    const onMessageClose = useCallback((e) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    clsName += getColorClass(isLight, kind);

    clsName += getSizeClass(false, scale);

    clsName += ' ' + className;

    clsName = clsName.trim();

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
