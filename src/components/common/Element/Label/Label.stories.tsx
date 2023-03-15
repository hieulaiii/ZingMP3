import * as React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from '.';

export default {
    title: 'Common/Element/Label',
    component: Label,
    args: {
        text: 'Đăng nhập',
    },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
    active: false,
};

export const Active = Template.bind({});

Active.args = {
    active: true,
};
