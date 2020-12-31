import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Button } from './Button';

export default {
    component: Button,
    title: 'Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}> CJS ! </Button>;

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
};

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};
