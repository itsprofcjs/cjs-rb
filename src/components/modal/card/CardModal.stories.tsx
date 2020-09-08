import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { CardModal, Props, demoFooter } from './CardModal';

export default {
    title: 'Card Modal',
    component: CardModal,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
} as Meta;

const Template: Story<Props> = (args) => <CardModal {...args}>Its relased</CardModal>;

export const isActive = Template.bind({});

isActive.args = {
    isActive: true,
    isClipped: true,
    modalTitle: 'Modal',
    footerContent: demoFooter,
};
