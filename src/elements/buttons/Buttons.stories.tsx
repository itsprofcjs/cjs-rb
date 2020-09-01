import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Buttons, Props } from './Buttons';
import { Button } from './button/Button';

export default {
    title: 'Buttons',
    component: Buttons,
} as Meta;

const Template: Story<Props> = (args) => (
    <Buttons {...args}>
        <Button kind="primary"> Know more </Button>

        <Button kind="success"> Know </Button>
    </Buttons>
);

export const Alignment = Template.bind({});

Alignment.args = {
    alignment: 'centered',
};

export const Addons = Template.bind({});

Addons.args = {
    hasAddons: true,
};
