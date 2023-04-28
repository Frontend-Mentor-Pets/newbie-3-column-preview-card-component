import Card from '../Card';
import Footer from '../Footer';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <main className={styles.app}>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
