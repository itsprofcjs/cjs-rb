import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Notification } from './Notification';

export default {
    component: Notification,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
    title: 'Notification',
} as Meta;

const Template: Story<Props> = (args) => <Notification {...args}>This is Notification</Notification>;

export const AutoClose = Template.bind({});

AutoClose.args = {
    autoDismiss: true,
    dismissAfter: 10,
    kind: 'primary',
};

export const Disabled = Template.bind({});

Disabled.args = {
    kind: 'danger',
};

export const NoCloseButton = Template.bind({});

NoCloseButton.args = {
    autoDismiss: true,
    dismissAfter: 10,
    hideClose: true,
    kind: 'primary',
};

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};
