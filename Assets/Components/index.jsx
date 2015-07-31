import React from 'react';
import Result from './searchConponent';
import Logo from './logo';
import Footer from './footer';
React.render(<Logo />, document.getElementById('logo'));
React.render(<Result />, document.getElementById('search'));
React.render(<Footer />, document.getElementById('footer'));
