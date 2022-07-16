import { forwardRef, HTMLAttributes, ReactNode, Ref, useCallback, useState } from 'react';

import { getColorClass, ColorClass } from '../../utils/colorClass';
import { getSizeClass, SizeClass } from '../../utils/sizeClass';

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

export const MessageElement = (
    {
        children,
        className = '',
        headerContent = '',
        isLight = false,
        kind = 'default',
        noHeader = false,
        onClose = () => {},
        scale = 'default',
        ...props
    }: Props,
    ref: Ref<HTMLElement>
) => {
    let clsName = 'message ';

    const [isVisible, setIsVisible] = useState(true);

    const onMessageClose = useCallback((e: any) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    clsName += getColorClass(isLight, kind);

    clsName += getSizeClass(false, scale);

    clsName += ' ' + className;

    clsName = clsName.trim();

    return isVisible ? (
        <article className={clsName} ref={ref} {...props}>
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

export const Message = forwardRef(MessageElement);
