import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { Heading1, Text } from './Typography';

export default {
  title: 'Atom/Typography',
  component: Heading1,
} as Meta;

const HeaderTemplate: Story<ComponentProps<typeof Heading1>> = (args) => (
  <Heading1 {...args} />
);

export const Header1 = HeaderTemplate.bind({});

Header1.args = {
  color: 'red',
  children: 'This what a header looks like',
};

const TextTemplate: Story<{}> = (args) => (
  <div style={{ background: 'gray', padding: '5px' }}>
    <Text {...args} />
  </div>
);
export const TextBody = TextTemplate.bind({});

TextBody.args = {
  children: 'this is what a body text looks like',
};
