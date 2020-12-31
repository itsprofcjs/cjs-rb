import { Meta, Story } from '@storybook/react/types-6-0';

import { AnchorButton, Props } from './AnchorButton';

export default {
    component: AnchorButton,
    title: 'Anchor Button',
} as Meta;

const Template: Story<Props> = (args) => <AnchorButton {...args}> Know me ! </AnchorButton>;

export const Info = Template.bind({});

Info.args = {
    kind: 'info',
};

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
    isDelete: true,
};
