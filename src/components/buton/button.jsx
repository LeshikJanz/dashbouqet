import React, { Component } from 'react';
import cx from 'classnames';
import './button.scss';

class Button extends Component {

  render() {
    const { text } = this.props;

    const className = {
      'button': true,
      'buton_text': text,
      'buton_without_text': !text,
    };

    return(
      <button className={cx(className)}>{text}</button>
    );
  }

}

export default Button;