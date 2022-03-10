import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Formik } from 'formik';
import React from 'react';

import ButtonComponent from '.';

export default {
  title: 'Button',
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'submit'] },
    },
  },
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <Formik
    initialValues={{ test: '' }}
    onSubmit={() => {
      console.log(1);
    }}>
    <ButtonComponent {...args} />
  </Formik>
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'button',
  isLoading: false,
  children: 'Click me',
};
