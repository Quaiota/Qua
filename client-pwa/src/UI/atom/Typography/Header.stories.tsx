import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Header, { Text } from './Header';

export default {
  title: 'Atom/Typography/Header',
  component: Header,
} as Meta;

const HeaderTemplate: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Header1 = HeaderTemplate.bind({});

Header1.args = {
  color: 'red',
  text: 'This what a header looks like',
};
Header1.args = {
  size: 'md',
  text: 'This what a header looks like',
};
Header1.args = {
  size: 'lg',
  text: 'This what a header looks like',
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
