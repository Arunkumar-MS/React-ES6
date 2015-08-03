import React from 'react';
import Result from './searchConponent';
import Logo from './logo';
import Footer from './footer';
import Navigation from './navigation';
React.render(<Logo />, document.getElementById('logo'));
React.render(<Result />, document.getElementById('search'));
React.render(<Navigation />, document.getElementById('navigationMenu'));
