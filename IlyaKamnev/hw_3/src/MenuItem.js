import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  render() {
    return (
      <li><a target="_blank" href={this.props.href}>{this.props.children}</a></li>
    );
  }
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  href: '/',
  children: 'По умолчанию',
}

export default MenuItem;