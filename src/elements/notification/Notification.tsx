import { HTMLAttributes, useCallback, useState, useEffect, Ref, forwardRef } from 'react';

import { getColorClass, ColorClass } from '../../utils/colorClass';

import { Button } from '../buttons/button/Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * Auto dismiss the notification after "dismissAfter" time has passed.
     * If autoDismiss is set to "true" and "dismissAfter" is not passed,
     * notification will dismiss after a default of 5sec
     */
    autoDismiss?: boolean;
    /** Auto dismiss the notification after n sec (default: 5sec)
     * For this to work you need to set "autoDismiss" to "true"
     */
    dismissAfter?: number;
    /**
     * Set true if you don't want to show close button (default: false)
     */
    hideClose?: boolean;
    isLight?: boolean;
    /**
     * Callback when close notification is clicked
     */
    onClose?: Function;
    kind?: ColorClass;
}

export const NotificationElement = (
    {
        autoDismiss = false,
        children,
        className = '',
        dismissAfter = 5,
        hideClose = false,
        isLight = false,
        onClose = () => {},
        kind = 'default',
    }: Props,
    ref: Ref<HTMLDivElement>
) => {
    let clsName = 'notification ';

    const colorClass = getColorClass(isLight, kind);

    const [isVisible, setIsVisible] = useState(true);

    clsName += colorClass;

    clsName += ' ' + className;

    clsName = clsName.trim();

    const onNotificationClose = useCallback((e: any) => {
        setIsVisible(false);
        onClose?.(e);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (autoDismiss) {
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, dismissAfter * 1000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [autoDismiss, dismissAfter]);

    return isVisible ? (
        <section ref={ref} className={clsName}>
            {!hideClose && <Button isDelete onClick={onNotificationClose} />}
            {children}
        </section>
    ) : null;
};

export const Notification = forwardRef(NotificationElement);
