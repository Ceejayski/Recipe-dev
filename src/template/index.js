import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';
import RecentlyViewed from '../recentlyViewed';

export default function Template(props) {
  const { children } = props;
  return (
    <div className="app">
      <NavBar />
      {children}
      <Container>
        <RecentlyViewed />
      </Container>
      <Footer />
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
