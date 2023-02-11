import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

import { DEFAULT_TASK } from './utils/mock';
import type { Task } from './types';

import styles from './App.module.css';

export const App = () => {
  const [tasks, setTasks] = React.useState<Task[]>(DEFAULT_TASK);

  return (
    <>
      <Header />

      <main className={styles.app}>
        <Form setTasks={setTasks} />

        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
};
