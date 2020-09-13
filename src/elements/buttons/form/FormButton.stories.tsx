import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, FormButton } from './FormButton';

export default {
    component: FormButton,
    title: 'Form Button',
} as Meta;

const Template: Story<Props> = (args) => <FormButton {...args} />;

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
    type: 'reset',
};

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
    type: 'submit',
};
