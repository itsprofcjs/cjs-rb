import React, { ClassAttributes, HTMLAttributes } from 'react';

import { ButtonsConfig, getButtonsClass } from './helpers/buttonsClass';

export interface Props extends ButtonsConfig, ClassAttributes<HTMLElement>, HTMLAttributes<HTMLElement> {}

export const Buttons = ({ children, ...props }: Props) => {
    const { className, restPayload } = getButtonsClass({ ...props });

    return (
        <section className={className} {...restPayload}>
            {children}
        </section>
    );
};
