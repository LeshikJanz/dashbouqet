import React, { Component } from 'react';
import cx from 'classnames';
import './button.scss';

class Button extends Component {

  render() {
    const { text } = this.props;

    return(
      <button className='button'>{text}</button>
    );
  }

}

export default Button;