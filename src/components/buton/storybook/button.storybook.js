import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '../button';

const defaultProps = {
  text: 'Click me'
};

storiesOf('Button', module)
  .add('Button', () => {
    <Button text={defaultProps.text} />
  });

