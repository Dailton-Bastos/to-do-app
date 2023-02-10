import React from 'react';

import { Info } from './Info';
import { Empty } from './Empty';

import styles from './Tasks.module.css';

export const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <Info />

      <Empty />
    </section>
  );
};
