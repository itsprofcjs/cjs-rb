import React, { HTMLAttributes } from 'react';

import { TagClass, getTagClass } from './helpers/tagClass';

interface Props extends TagClass, HTMLAttributes<HTMLSpanElement> {}

const Tag = ({ children, isDelete, ...props }: Props) => {
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

export default Tag;
