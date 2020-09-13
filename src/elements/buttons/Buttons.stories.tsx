import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Buttons, Props } from './Buttons';
import { Button } from './button/Button';

export default {
    component: Buttons,
    title: 'Buttons',
} as Meta;

const Template: Story<Props> = (args) => (
    <Buttons {...args}>
        <Button kind="primary"> Know more </Button>

        <Button kind="success"> Know </Button>
    </Buttons>
);

export const Addons = Template.bind({});

Addons.args = {
    hasAddons: true,
};

export const Alignment = Template.bind({});

Alignment.args = {
    alignment: 'centered',
};
