import React from 'react';

import styles from './Info.module.css';

export const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>
        <span className={styles.infoCreated}>Tarefas criadas</span>

        <div className={styles.infoCounter}>
          <span>0</span>
        </div>
      </div>

      <div className={styles.infoTitle}>
        <span className={styles.infoDone}>Concluídas</span>

        <div className={styles.infoCounter}>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
