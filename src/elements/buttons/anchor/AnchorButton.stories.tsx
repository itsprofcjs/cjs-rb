import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { AnchorButton, Props } from './AnchorButton';

export default {
    title: 'Anchor Button',
    component: AnchorButton,
} as Meta;

const Template: Story<Props> = (args) => <AnchorButton {...args}> Know me ! </AnchorButton>;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
    isDelete: true,
};

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
};
