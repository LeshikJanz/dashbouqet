import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '../button';

const props = {
  text: 'Click me'
};

storiesOf('Button', module)
  .add('Button with text', () => (
    <Button {...props} />
  ));

