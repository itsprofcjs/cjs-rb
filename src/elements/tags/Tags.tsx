import React, { forwardRef, HTMLAttributes, Ref } from 'react';

import { getTagsClass, TagsConfig } from './helpers/tagsClass';

export interface Props extends HTMLAttributes<Element>, TagsConfig {}

export const TagsElement = ({ children, ...props }: Props, ref: Ref<HTMLDivElement>) => {
    const { className, restPayload } = getTagsClass({ ...props });

    return (
        <section ref={ref} className={className} {...restPayload}>
            {children}
        </section>
    );
};

export const Tags = forwardRef(TagsElement);
