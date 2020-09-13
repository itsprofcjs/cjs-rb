import React, { ClassAttributes, CSSProperties, HTMLAttributes } from 'react';

export interface Props extends ClassAttributes<HTMLElement>, HTMLAttributes<HTMLElement> {
    containerClass?: string;
    containerStyle?: CSSProperties;
}

// The box element is simply a container with a shadow, a border, a radius, and some padding.
export const Box = ({ containerClass = '', containerStyle = {}, children, ref }: Props) => {
    return (
        <section className={`box ${containerClass}`} ref={ref} style={containerStyle}>
            {children}
        </section>
    );
};
