import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import TextWrap from './TextWrap';

export default {
  title: 'Atom/Typography/Header',
  component: TextWrap,
} as Meta;

const HeaderTemplate: Story<ComponentProps<typeof TextWrap>> = (args) => (
  <TextWrap {...args} />
);

export const Header1 = HeaderTemplate.bind({});

Header1.args = {
  color: 'red',
  children: 'This what a header looks like',
};
Header1.args = {
  fontSize: 'h1',
  children: 'This what a header looks like',
};
Header1.args = {
  fontSize: 'body',
  children: 'This what a header looks like',
};

const TextTemplate: Story<{}> = (args) => (
  <div style={{ background: 'gray', padding: '5px' }}>
    <TextWrap {...args} />
  </div>
);
export const TextBody = TextTemplate.bind({});

TextBody.args = {
  children: 'this is what a body text looks like',
};
