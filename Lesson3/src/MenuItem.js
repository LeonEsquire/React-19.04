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
  children: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired
}

MenuItem.defaultProps = {
  children: 'Главная (страница по умолчанию)',
  href: '/'
}

export default MenuItem;