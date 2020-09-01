import React, { InputHTMLAttributes } from 'react';
import { getButtonClass, ButtonConfig } from '../helpers/buttonClass';

export interface Props extends ButtonConfig, InputHTMLAttributes<HTMLInputElement> {
    type?: 'submit' | 'reset' | 'button';
}

export const FormButton = ({ type = 'button', ...props }: Props) => {
    const { className, restPayload } = getButtonClass({ ...props });

    return <input type={type} className={className} {...restPayload} />;
};
