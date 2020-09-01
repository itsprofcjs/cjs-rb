import React, { HTMLAttributes } from 'react';

import { TagsConfig, getTagsClass } from './helpers/tagsClass';

export interface Props extends TagsConfig, HTMLAttributes<Element> {}

export const Tags = ({ children, ...props }: Props) => {
    const { className, restPayload } = getTagsClass({ ...props });

    return (
        <section className={className} {...restPayload}>
            {children}
        </section>
    );
};
