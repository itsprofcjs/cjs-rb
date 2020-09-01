import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Notification, Props } from './Notification';

export default {
    title: 'Notification',
    component: Notification,
} as Meta;

const Template: Story<Props> = (args) => <Notification {...args}>This is Notification</Notification>;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};

export const Disabled = Template.bind({});

Disabled.args = {
    kind: 'danger',
};
