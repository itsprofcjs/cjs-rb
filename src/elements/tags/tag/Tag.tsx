import React, { ClassAttributes, HTMLAttributes } from 'react';

import { getTagClass, TagClass } from '../helpers/tagClass';

export interface Props extends ClassAttributes<HTMLSpanElement>, HTMLAttributes<HTMLSpanElement>, TagClass {}

export const Tag = ({ children, isDelete, ...props }: Props) => {
    const { className, restPayload } = getTagClass({ isDelete, ...props });

    if (isDelete) {
        return <span className={className} {...restPayload}></span>;
    } else {
        return (
            <span className={className} {...restPayload}>
                {children}
            </span>
        );
    }
};
