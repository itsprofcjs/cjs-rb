import React, { forwardRef, HTMLAttributes, Ref } from 'react';

import { getTagClass, TagClass } from '../helpers/tagClass';

export interface Props extends HTMLAttributes<HTMLSpanElement>, TagClass {}

export const TagElement = ({ children, isDelete, ...props }: Props, ref: Ref<HTMLSpanElement>) => {
    const { className, restPayload } = getTagClass({ isDelete, ...props });

    if (isDelete) {
        return <span ref={ref} className={className} {...restPayload}></span>;
    } else {
        return (
            <span ref={ref} className={className} {...restPayload}>
                {children}
            </span>
        );
    }
};

export const Tag = forwardRef(TagElement);
