import React from 'react';

import { Info } from './Info';
// import { Empty } from './Empty';
import { List } from './List';

import type { TasksProps } from '../../types';

import styles from './Tasks.module.css';

export const Tasks = ({ tasks, setTasks }: TasksProps) => {
  const totalCounter = React.useMemo(() => {
    return tasks?.length;
  }, [tasks]);

  const totalDone = React.useMemo(() => {
    return tasks?.reduce((accumulator, currentValue) => {
      if (currentValue?.isFinished) accumulator += 1;

      return accumulator;
    }, 0);
  }, [tasks]);

  return (
    <section className={styles.tasks}>
      <Info totalCounter={totalCounter} totalDone={totalDone} />

      {/* <Empty /> */}

      <List tasks={tasks} setTasks={setTasks} />
    </section>
  );
};
