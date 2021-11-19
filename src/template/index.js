import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';

export default function Template(props) {
  const { children } = props;
  return (
    <div className="app">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
