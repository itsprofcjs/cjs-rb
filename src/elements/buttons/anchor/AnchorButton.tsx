import React, { AnchorHTMLAttributes, ClassAttributes } from 'react';

import { getButtonClass, ButtonConfig } from '../helpers/buttonClass';

export interface Props
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        ButtonConfig,
        ClassAttributes<HTMLAnchorElement> {}

export const AnchorButton = ({ children, isDelete, ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    if (isDelete) {
        return <a className={className} />;
    } else {
        return (
            <a className={className} {...restPayload}>
                {children}
            </a>
        );
    }
};
