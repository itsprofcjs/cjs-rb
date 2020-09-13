import React, { ButtonHTMLAttributes, ClassAttributes } from 'react';

import { ButtonConfig, getButtonClass } from '../helpers/buttonClass';

export interface Props
    extends ButtonConfig,
        ButtonHTMLAttributes<HTMLButtonElement>,
        ClassAttributes<HTMLButtonElement> {}

export const Button = ({ children, isDelete, ref, ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    return (
        <button className={className} ref={ref} {...restPayload}>
            {!isDelete && children}
        </button>
    );
};
