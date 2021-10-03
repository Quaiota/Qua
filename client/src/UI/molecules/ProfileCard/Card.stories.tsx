import { Story, Meta } from '@storybook/react';
import ProfileCard from './ProfileCard';

export default {
  title: 'Molecule/Card',
  component: ProfileCard,
} as Meta;

const Template: Story<{}> = (args) => <ProfileCard {...args} />;

export const Profilecard = Template.bind({});
