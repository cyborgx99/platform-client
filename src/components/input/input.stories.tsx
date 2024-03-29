import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Formik } from 'formik';
import React from 'react';

import FormInput from '.';

export default {
  title: 'Form Input',
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'email', 'password'] },
    },
  },
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <Formik
    initialValues={{ test: '' }}
    onSubmit={() => {
      console.log(1);
    }}>
    <FormInput {...args} />
  </Formik>
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'text',
  label: 'Input field',
  name: 'test',
};
