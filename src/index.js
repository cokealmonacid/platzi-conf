import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(<Badge name="Jorge" lastName="Almonacid" jobTitle="Software Engineer" twitter="cokealmonacid" />, container);
ReactDOM.render(<BadgeNew />, container);