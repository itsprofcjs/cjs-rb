import React, { ClassAttributes, InputHTMLAttributes } from 'react';

import { ButtonConfig, getButtonClass } from '../helpers/buttonClass';

export interface Props extends ButtonConfig, ClassAttributes<HTMLInputElement>, InputHTMLAttributes<HTMLInputElement> {
    type?: 'button' | 'reset' | 'submit';
}

export const FormButton = ({ type = 'button', ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ ...props });

    return <input className={className} type={type} {...restPayload} />;
};
