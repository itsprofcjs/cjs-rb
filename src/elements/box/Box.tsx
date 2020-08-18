import React, { ReactNode, CSSProperties } from 'react';

interface Props {
    containerClass?: string;
    containerStyle?: CSSProperties;

    children: ReactNode;
}

// The box element is simply a container with a shadow, a border, a radius, and some padding.
const Box = ({ containerClass = '', containerStyle = {}, children }: Props) => {
    return (
        <section className={`box ${containerClass}`} style={containerStyle}>
            {children}
        </section>
    );
};

export default Box;
