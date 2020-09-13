import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react';

import { getButtonClass, ButtonConfig } from '../helpers/buttonClass';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonConfig {}

export const AnchorButtonElement = ({ children, isDelete, ...props }: Props, ref: Ref<HTMLAnchorElement>) => {
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

export const AnchorButton = forwardRef(AnchorButtonElement);
