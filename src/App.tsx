import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

import type { Task } from './types';

import styles from './App.module.css';

export const App = () => {
  const initialData = () => {
    const tasks = window.localStorage.getItem('tasks');

    return tasks !== null ? JSON.parse(tasks) : [];
  };

  const [tasks, setTasks] = React.useState<Task[]>(() => initialData());

  React.useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
