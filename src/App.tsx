import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <Form />

        <Tasks />
      </main>
    </>
  );
};
