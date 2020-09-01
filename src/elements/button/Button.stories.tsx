import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Props } from './Button';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}> CJS ! </Button>;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
};
