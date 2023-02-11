import { Info } from './Info';
// import { Empty } from './Empty';
import { List } from './List';

import type { TasksProps } from '../../types';

import styles from './Tasks.module.css';

export const Tasks = ({ tasks }: TasksProps) => {
  return (
    <section className={styles.tasks}>
      <Info />

      {/* <Empty /> */}

      <List tasks={tasks} />
    </section>
  );
};
