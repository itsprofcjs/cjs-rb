import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FormButton, Props } from './FormButton';

export default {
    title: 'Form Button',
    component: FormButton,
} as Meta;

const Template: Story<Props> = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
    type: 'submit',
};

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
    type: 'reset',
};
