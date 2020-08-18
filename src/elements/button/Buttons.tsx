import React, { HTMLAttributes } from 'react';

import { ButtonsConfig, getButtonsClass } from './helpers/buttonsClass';

interface Props extends ButtonsConfig, HTMLAttributes<Element> {}

const Buttons = ({ children, ...props }: Props) => {
    const { className, restPayload } = getButtonsClass({ ...props });

    return (
        <section className={className} {...restPayload}>
            {children}
        </section>
    );
};

export default Buttons;
