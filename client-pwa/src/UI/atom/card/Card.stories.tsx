import { Story, Meta } from '@storybook/react';
import Card, { ICard } from './Card';

export default {
  title: 'Atom/Card',
  component: Card,
} as Meta;

const Template: Story<ICard> = (args) => <Card {...args} />;

export const card = Template.bind({});
card.args = {
  children: (
    <div>
      <h1>Hello world</h1>
    </div>
  ),
};
