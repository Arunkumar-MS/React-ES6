import React from 'react';
import Result from './searchConponent';
import Logo from './logo';
import Footer from './footer';
import Navigation from './navigation';
import Login from './Login';
import MiniBasket from './miniBasket';
import Registration from './registration';
React.render(<Login />, document.getElementById('login'));
React.render(<Logo />, document.getElementById('logo'));
React.render(<Result />, document.getElementById('search'));
React.render(<Navigation />, document.getElementById('navigationMenu'));
React.render(<Footer />, document.getElementById('footer'));
React.render(<MiniBasket  />, document.getElementById('miniBasket'));
React.render(<Registration  />, document.getElementById('registration'));

