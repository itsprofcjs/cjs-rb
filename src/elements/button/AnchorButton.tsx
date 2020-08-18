import React, { AnchorHTMLAttributes } from 'react';

import { ButtonConfig, getButtonClass } from './helpers/buttonClass';

interface Props extends ButtonConfig, AnchorHTMLAttributes<HTMLAnchorElement> {}

const AnchorButton = ({ isDelete, children, ...props }: Props) => {
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

export default AnchorButton;
