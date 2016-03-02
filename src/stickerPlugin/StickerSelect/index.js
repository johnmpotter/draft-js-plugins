import React, { Component } from 'react';
import styles from './styles';
import StickerOption from './StickerOption';

/**
 * Sets the CSS overflow value to newValue
 * Use like this: setOverflow('auto', document.body);
 */
function setOverflow(newValue, element) {
  element.style.overflow = newValue; // eslint-disable-line no-param-reassign
}

const body = document.body;

export default (stickers) => {
  class StickerSelect extends Component {

    state = {
      open: false,
    };

    onMouseEnter = () => {
      setOverflow('hidden', body);
    };

    onMouseLeave = () => {
      setOverflow('auto', body);
    };

    toggle = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    render() {
      const editor = this.props.editor;
      const stickerElements = stickers.map((sticker) => (
        <StickerOption
          editor={ editor }
          sticker={ sticker }
        />
      ));

      const popoverStyle = {
        ...styles.popover,
        display: (this.state.open ? 'block' : 'none'),
      };

      const buttonStyle = {
        ...styles.button,
        background: (this.state.open ? '#ededed' : '#fff'),
      };

      return (
        <div style={ styles.root }>
          <button
            style={ buttonStyle }
            onClick={ this.toggle }
            type="button"
          >
            ☺
          </button>
          <div
            style={ popoverStyle }
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }
          >
            <div style={ styles.stickerList }>
              { stickerElements.toList().toJS() }
            </div>
            <div style={ styles.bottomGradient }></div>
          </div>
        </div>
      );
    }
  }
  return StickerSelect;
};
