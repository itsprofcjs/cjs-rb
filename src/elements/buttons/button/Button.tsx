import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

import { ButtonConfig, getButtonClass } from '../helpers/buttonClass';

export interface Props extends ButtonConfig, ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonElement = ({ children, isDelete, ...props }: Props, ref: Ref<HTMLButtonElement>) => {
    const { className, restPayload } = getButtonClass({ isDelete, ...props });

    return (
        <button className={className} ref={ref} {...restPayload}>
            {!isDelete && children}
        </button>
    );
};

export const Button = forwardRef(ButtonElement);
