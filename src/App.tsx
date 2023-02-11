import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

import { DEFAULT_TASK } from './utils/mock';
import { uuid } from './utils/helpers';
import type { Task } from './types';

import styles from './App.module.css';

export const App = () => {
  const [tasks, setTasks] = React.useState<Task[]>(DEFAULT_TASK);
  const [taskTitle, setTaskTitle] = React.useState('');

  const onSubmitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      setTasks((prev) => [
        { id: uuid(), title: taskTitle, isFinished: false },
        ...prev,
      ]);

      setTaskTitle('');
    },
    [taskTitle]
  );

  return (
    <>
      <Header />

      <main className={styles.app}>
        <Form
          value={taskTitle}
          changeValue={setTaskTitle}
          submitForm={onSubmitForm}
        />

        <Tasks tasks={tasks} />
      </main>
    </>
  );
};
