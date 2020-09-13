import React, { AnchorHTMLAttributes, ClassAttributes } from 'react';

import { getButtonClass, ButtonConfig } from '../helpers/buttonClass';

export interface Props
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        ButtonConfig,
        ClassAttributes<HTMLAnchorElement> {}

export const AnchorButton = ({ children, isDelete, ref, ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    if (isDelete) {
        return <a className={className} ref={ref} />;
    } else {
        return (
            <a className={className} ref={ref} {...restPayload}>
                {children}
            </a>
        );
    }
};
