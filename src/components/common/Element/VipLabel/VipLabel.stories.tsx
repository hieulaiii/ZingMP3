import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VipLabel } from '.';

export default {
    title: 'Common/Element/VipLabel',
    component: VipLabel,
} as ComponentMeta<typeof VipLabel>;

const Template: ComponentStory<typeof VipLabel> = () => <VipLabel />;

export const VipLabelComponent = Template.bind({});
