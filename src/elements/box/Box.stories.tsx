import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Box } from './Box';

export default {
    component: Box,
    title: 'Box',
} as Meta;

const Template: Story<Props> = (args) => <Box {...args}> Its rolling </Box>;

export const Primary = Template.bind({});

Primary.args = {
    containerClass: 'primary',
};
