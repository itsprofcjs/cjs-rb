import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, Props } from './Modal';

export default {
    title: 'Modal',
    component: Modal,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args}>Its relased</Modal>;

export const isActive = Template.bind({});

isActive.args = {
    isActive: true,
};
