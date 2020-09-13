import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Image } from './Image';

export default {
    component: Image,
    title: 'Image',
} as Meta;

const Template: Story<Props> = (args) => (
    <Image
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F137-1377870_canvas-sample-sample-image-url.png&imgrefurl=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2q8i1y3w7u2i1a9_canvas-sample-sample-image-url%2F&tbnid=q9CkBYSVHv6UvM&vet=12ahUKEwjDp_uYncjrAhVhiOYKHRsHBzcQMygDegUIARCoAQ..i&docid=31qpFmzyUINLPM&w=820&h=573&q=sample%20image%20url&ved=2ahUKEwjDp_uYncjrAhVhiOYKHRsHBzcQMygDegUIARCoAQhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2q8i1y3w7u2i1a9_canvas-sample-sample-image-url%2F&psig=AOvVaw1ioKSf4_IRYgG43izr27lQ&ust=1599059021672000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCIi_wMGdyOsCFQAAAAAdAAAAABAD"
        {...args}
    />
);

export const Rounded = Template.bind({});

Rounded.args = {
    isRounded: true,
};

export const Square = Template.bind({});

Square.args = {
    isSquare: true,
};
