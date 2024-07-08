import { forwardRef, InputHTMLAttributes, Ref } from 'react';

import { ButtonConfig, getButtonClass } from '../helpers/buttonClass';

export interface Props extends ButtonConfig, InputHTMLAttributes<HTMLInputElement> {
    type?: 'button' | 'reset' | 'submit';
}

export const FormButtonElement = ({ type = 'button', ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const { className, restPayload } = getButtonClass({ ...props });

    return <input className={className} ref={ref} type={type} {...restPayload} />;
};

export const FormButton = forwardRef(FormButtonElement);
