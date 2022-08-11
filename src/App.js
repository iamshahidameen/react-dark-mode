import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  const [theme, setTheme] = useState('light-theme');

  const handleChange = (e) => {
    console.log(e.target);
    document.documentElement.classList.toggle('dark-theme');
    console.log(document.documentElement.classList);
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleChange}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          console.log(item);
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
