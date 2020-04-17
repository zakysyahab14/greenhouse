import React from 'react';
import './App.css';
import Bar from './component/navbar.js'
import Email from './component/email.js'
import News from './component/news.js'
import Start from './component/start.js'
import Footer from './component/footer.js'


function App() {
  return (
    <div className="App">
        <Bar />
        <Email />
        <News />
        <Start />
        <Footer />
      
    </div>
  );
}

export default App;
