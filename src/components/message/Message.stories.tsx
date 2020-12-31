import { Meta, Story } from '@storybook/react/types-6-0';

import { Message, Props } from './Message';

export default {
    component: Message,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
    title: 'Message',
} as Meta;

const Template: Story<Props> = (args) => (
    <Message headerContent="cjs-rb is new" {...args}>
        Check it out
    </Message>
);

export const NoHeader = Template.bind({});

NoHeader.args = {
    kind: 'danger',
    noHeader: true,
};

export const Primary = Template.bind({});

Primary.args = {
    kind: 'primary',
};
