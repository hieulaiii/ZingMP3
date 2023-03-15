import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SongCard } from '.';

export default {
    title: 'Common/interaction/SongCard',
    component: SongCard,
    args: {},
} as ComponentMeta<typeof SongCard>;

const Template: ComponentStory<typeof SongCard> = (args) => <SongCard {...args} />;

export const Default = Template.bind({});
