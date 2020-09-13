import React, { CSSProperties, forwardRef, HTMLAttributes, Ref } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
    containerClass?: string;
    containerStyle?: CSSProperties;
}

// The box element is simply a container with a shadow, a border, a radius, and some padding.
const BoxElement = ({ containerClass = '', containerStyle = {}, children }: Props, ref: Ref<HTMLElement>) => {
    return (
        <section className={`box ${containerClass}`} ref={ref} style={containerStyle}>
            {children}
        </section>
    );
};

export const Box = forwardRef(BoxElement);
