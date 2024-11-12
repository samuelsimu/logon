import Head from 'next/head';
import styles from 'public/styles/page1.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SGS</title>
        <meta name="description" content="Garbage collection and recycling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>SGS</h1>
        <div className={styles.menuIcon}>&#9776;</div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            {/* Add your garbage collection image below */}
            <img src="/garbage-collection.png" alt="Garbage Collection" className={styles.image} />
            <p>GABBAGE COLLECTION</p>
          </div>

          <div className={styles.card}>
            {/* Add your recycling image below */}
            <img src="/recycle.png" alt="Recycle" className={styles.image} />
            <p>RECYCLE</p>
          </div>

          <div className={styles.cardLarge}>
            {/* Add your disposal image below */}
            <img src="/disposal.png" alt="How to Dispose Garbage" className={styles.largeImage} />
            <p>HOW TO DISPOSE GABBAGE</p>
          </div>
        </div>

        <button className={styles.button}>
          COLLECT MY GABBAGE - MY LOCATION
        </button>
      </main>
    </div>
  );
}
