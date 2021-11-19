import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className="footer-basic d-flex justify-content-center text-center bg-white mt-5">
      <footer>
        <div className="social-links mb-2">
          <a href="/" className="links-social"><i className="fab fa-instagram mt-2" aria-label="Social" /></a>
          <a href="/" className="links-social"><i className="fab fa-snapchat-square  mt-2" aria-label="Social" /></a>
          <a href="/" className="links-social"><i className="fab fa-twitter  mt-2" aria-label="Social" /></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/">Home</a></li>
          <li className="list-inline-item"><a href="/">Services</a></li>
          <li className="list-inline-item"><a href="/">About</a></li>
          <li className="list-inline-item"><a href="/">Terms</a></li>
          <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
        </ul>
        <p className="copyright last-line">
          RecipeDev Made With Love by
          {' '}
          <a href="http://github.com/ceejayski" className="text-primary">Ceejayski </a>
          {' '}
          © 2021
        </p>
      </footer>
    </div>
  );
}
