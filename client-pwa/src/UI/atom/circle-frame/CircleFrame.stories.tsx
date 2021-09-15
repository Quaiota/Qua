import { Story, Meta } from '@storybook/react';
import CircleFrame, { ICircleFrame } from './CircleFrame';

export default {
  title: 'Atom/RoundPic',
  component: CircleFrame,
} as Meta;

const Template: Story<ICircleFrame> = (args) => (
  <div>
    <CircleFrame {...args} />
  </div>
);

export const Roundpic = Template.bind({});

Roundpic.args = {
  circleSize: 'sm',
  image:
    'https://images.unsplash.com/photo-1606590179266-8290574f18b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  border: true,
  borderColor: 'red',
};
Roundpic.args = {
  circleSize: 'md',
  image:
    'https://images.unsplash.com/photo-1606590179266-8290574f18b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  border: true,
};
