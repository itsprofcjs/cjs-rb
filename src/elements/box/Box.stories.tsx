import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, Props } from './Box';

export default {
    title: 'Box',
    component: Box,
} as Meta;

const Template: Story<Props> = (args) => <Box {...args}> Its rolling </Box>;

export const Primary = Template.bind({});

Primary.args = {
    containerClass: 'primary',
};
