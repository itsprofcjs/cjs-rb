import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tag, Props } from './Tag';

export default {
    title: 'Tag',
    component: Tag,
} as Meta;

const Template: Story<Props> = (args) => <Tag {...args}> info </Tag>;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};

export const Rounded = Template.bind({});

Rounded.args = {
    kind: 'danger',
    isRounded: true,
};
