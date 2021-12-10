// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Toast from './Toast';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <div>
    <Toast {...args} />
  </div>
);

export const ErrorTag = Template.bind({});

ErrorTag.args = {
  text: 'Error',
  state: 'error',
};

export const Success = Template.bind({});

Success.args = {
  text: 'Success',
  state: 'success',
};

export const Info = Template.bind({});

Info.args = {
  text: 'Info',
  state: 'info',
};

export const Warning = Template.bind({});

Warning.args = {
  text: 'Warning',
  state: 'warning',
};

export const Loading = Template.bind({});

Loading.args = {
  text: 'Loading',
  state: 'loading',
};
