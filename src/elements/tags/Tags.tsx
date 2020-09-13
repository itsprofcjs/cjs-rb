import React, { ClassAttributes, HTMLAttributes } from 'react';

import { getTagsClass, TagsConfig } from './helpers/tagsClass';

export interface Props extends ClassAttributes<HTMLElement>, HTMLAttributes<Element>, TagsConfig {}

export const Tags = ({ children, ref, ...props }: Props) => {
    const { className, restPayload } = getTagsClass({ ...props });

    return (
        <section ref={ref} className={className} {...restPayload}>
            {children}
        </section>
    );
};
