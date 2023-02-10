import React from 'react';

import { Info } from './Info';

import styles from './Tasks.module.css';

export const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <Info />
    </section>
  );
};
