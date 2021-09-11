import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { Heading1 } from './Typography';

export default {
  title: 'Atom',
  component: Heading1,
} as Meta;

const Template: Story<ComponentProps<typeof Heading1>> = (args) => (
  <Heading1 {...args} />
);

export const Header1 = Template.bind({});

Header1.args = {
  color: 'red',
  children: 'Heading 1',
};
