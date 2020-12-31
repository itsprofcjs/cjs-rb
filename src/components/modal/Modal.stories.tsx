import { Meta, Story } from '@storybook/react/types-6-0';

import { Modal, Props } from './Modal';

export default {
    component: Modal,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
    title: 'Modal',
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args}>Its relased</Modal>;

export const isActive = Template.bind({});

isActive.args = {
    isActive: true,
};
