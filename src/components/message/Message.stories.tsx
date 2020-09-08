import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Message, Props } from './Message';

export default {
    title: 'Message',
    component: Message,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
} as Meta;

const Template: Story<Props> = (args) => (
    <Message headerContent="cjs-rb is new" {...args}>
        Check it out
    </Message>
);

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};

export const NoHeader = Template.bind({});

NoHeader.args = {
    kind: 'danger',
    noHeader: true,
};
