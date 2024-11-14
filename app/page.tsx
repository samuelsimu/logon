import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>SGS</title>
        <meta name="description" content="Garbage collection and recycling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>SGS</h1>
        <div className="menuIcon">&#9776;</div>
      </header>

      <main className="main">
        <div className="grid">
          <div className="card">
            <img src="/garbage-collection.png" alt="Garbage Collection" className="image" />
            <p>GABBAGE COLLECTION</p>
          </div>

          <div className="card">
            <img src="/recycle.png" alt="Recycle" className="image" />
            <p>RECYCLE</p>
          </div>

          <div className="cardLarge">
            <img src="/disposal.png" alt="How to Dispose Garbage" className="largeImage" />
            <p>HOW TO DISPOSE GABBAGE</p>
          </div>
        </div>

        <button className="button">
          COLLECT MY GABBAGE - MY LOCATION
        </button>
      </main>
    </div>
  );
};

export default Home;
