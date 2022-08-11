import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    // document.documentElement.classList.toggle('dark-theme');
    // console.log(document.documentElement.classList);
  };
  useEffect(() => {
    // document.documentElement.className = isDark;
    isDark
      ? (document.documentElement.className = 'dark-theme')
      : (document.documentElement.className = 'light-theme');
  }, [isDark]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={() => setIsDark(!isDark)}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
