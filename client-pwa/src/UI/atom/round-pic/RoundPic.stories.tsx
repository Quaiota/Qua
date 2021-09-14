import { Story, Meta } from '@storybook/react';
import RoundPic from './RoundPic';

export default {
  title: 'Atom/RoundPic',
  component: RoundPic,
} as Meta;

const Template: Story<{}> = (args) => (
  <div>
    <RoundPic {...args} />
  </div>
);

export const Roundpic = Template.bind({});

Roundpic.args = {
  src:
    'https://images.unsplash.com/photo-1606590179266-8290574f18b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
};
