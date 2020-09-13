import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Tag } from './Tag';

export default {
    component: Tag,
    title: 'Tag',
} as Meta;

const Template: Story<Props> = (args) => <Tag {...args}> info </Tag>;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};

export const Rounded = Template.bind({});

Rounded.args = {
    isRounded: true,
    kind: 'danger',
};
