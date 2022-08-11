import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn">toggle</button>
        </div>
      </nav>
      <section className="articles">
        <article className="post">
          <h2>the WET Codbase</h2>
          <div className="post-info">
            <span>Sunday 4th, 2020</span>
            <span>11 min read</span>
          </div>
          <p>Come waste your time with me</p>
        </article>
      </section>
    </main>
  );
}

export default App;
