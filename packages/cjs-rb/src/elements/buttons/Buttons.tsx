import { forwardRef, HTMLAttributes, Ref } from 'react';

import { ButtonsConfig, getButtonsClass } from './helpers/buttonsClass';

export interface ButtonsProps extends ButtonsConfig, HTMLAttributes<HTMLDivElement> {}

export const ButtonsElement = ({ children, ...props }: ButtonsProps, ref: Ref<HTMLDivElement>) => {
    const { className, restPayload } = getButtonsClass({ ...props });

    return (
        <section className={className} ref={ref} {...restPayload}>
            {children}
        </section>
    );
};

export const Buttons = forwardRef(ButtonsElement);
