import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tags, Props } from './Tags';
import { Tag } from './tag/Tag';

export default {
    title: 'Tags',
    component: Tags,
} as Meta;

const Template: Story<Props> = (args) => (
    <Tags {...args}>
        <Tag kind="primary"> First choice </Tag>
        <Tag kind="danger"> First choice </Tag>
    </Tags>
);

export const HasAddons = Template.bind({});

HasAddons.args = {
    hasAddons: true,
};

export const Size = Template.bind({});

Size.args = {
    scale: 'large',
};
