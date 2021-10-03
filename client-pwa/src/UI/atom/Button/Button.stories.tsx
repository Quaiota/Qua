import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atom/Button',
  component: Button,
} as Meta;

const Template: Story<{}> = (args) => <Button {...args} />;

export const Button_ = Template.bind({});

Button_.args = {
  children: 'Button',
};
