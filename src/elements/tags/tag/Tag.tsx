import React, { ClassAttributes, HTMLAttributes } from 'react';

import { getTagClass, TagClass } from '../helpers/tagClass';

export interface Props extends ClassAttributes<HTMLSpanElement>, HTMLAttributes<HTMLSpanElement>, TagClass {}

export const Tag = ({ children, isDelete, ref, ...props }: Props) => {
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
