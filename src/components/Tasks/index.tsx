import { Info } from './Info';
// import { Empty } from './Empty';
import { List } from './List';

import styles from './Tasks.module.css';

export const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <Info />

      {/* <Empty /> */}

      <List />
    </section>
  );
};
