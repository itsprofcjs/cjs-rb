import React, { ButtonHTMLAttributes } from 'react';

import { ButtonConfig, getButtonClass } from './helpers/buttonClass';

interface Props extends ButtonConfig, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ isDelete, children, ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    return (
        <button className={className} {...restPayload}>
            {!isDelete && children}
        </button>
    );
};

export { Button, Props };
