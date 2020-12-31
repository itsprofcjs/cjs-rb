import { Meta, Story } from '@storybook/react/types-6-0';

import { CardModal, demoFooter, Props } from './CardModal';

export default {
    component: CardModal,
    parameters: {
        actions: {
            handles: ['click Button'],
        },
    },
    title: 'Card Modal',
} as Meta;

const Template: Story<Props> = (args) => <CardModal {...args}>Its relased</CardModal>;

export const isActive = Template.bind({});

isActive.args = {
    footerContent: demoFooter,
    isActive: true,
    isClipped: true,
    modalTitle: 'Modal',
};
