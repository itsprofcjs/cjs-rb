import React, { HTMLAttributes } from 'react';

import { TagsConfig, getTagsClass } from './helpers/tagsClass';

interface Props extends TagsConfig, HTMLAttributes<Element> {}

const Tags = ({ children, ...props }: Props) => {
    const { className, restPayload } = getTagsClass({ ...props });

    return (
        <section className={className} {...restPayload}>
            {children}
        </section>
    );
};

export default Tags;
