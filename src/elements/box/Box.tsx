import React, { ReactNode, CSSProperties } from 'react';

export interface Props {
    containerClass?: string;
    containerStyle?: CSSProperties;

    children: ReactNode;
}

// The box element is simply a container with a shadow, a border, a radius, and some padding.
export const Box = ({ containerClass = '', containerStyle = {}, children }: Props) => {
    return (
        <section className={`box ${containerClass}`} style={containerStyle}>
            {children}
        </section>
    );
};
