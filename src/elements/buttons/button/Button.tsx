import React, { ButtonHTMLAttributes } from 'react';

import { ButtonConfig, getButtonClass } from '../helpers/buttonClass';

export interface Props extends ButtonConfig, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ isDelete, children, ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    return (
        <button className={className} {...restPayload}>
            {!isDelete && children}
        </button>
    );
};
