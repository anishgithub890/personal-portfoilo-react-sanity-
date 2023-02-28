import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Resume } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    <Resume />
  </div>
);

export default App;
