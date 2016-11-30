import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '../button';

const props = {
  text: '123'
};

storiesOf('App', module)
  .add('Button text', () => (
    <Button {...props} />
  ));

