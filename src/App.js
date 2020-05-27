import React from 'react';
import './App.css';
import Bar from './component/navbar.js'
import About from './component/email.js'
import News from './component/news.js'
import Footer from './component/footer.js'
import Pricing from './component/pricing.js'
import Example from './component/form.js'


function App() {
  return (
    <div id="Page" className="App">
        <Bar />
        <News />
        <About />
        <Pricing />
        <Example />
        <Footer />
      
    </div>
  );
}

export default App;
