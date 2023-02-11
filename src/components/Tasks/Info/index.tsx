import type { InfoProps } from '../../../types';
import styles from './Info.module.css';

export const Info = ({ totalCounter, totalDone }: InfoProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>
        <span className={styles.infoCreated}>Tarefas criadas</span>

        <div className={styles.infoCounter}>
          <span>{totalCounter}</span>
        </div>
      </div>

      <div className={styles.infoTitle}>
        <span className={styles.infoDone}>Concluídas</span>

        <div className={styles.infoCounter}>
          <span>{totalDone > 0 ? `${totalDone} de ${totalCounter}` : '0'}</span>
        </div>
      </div>
    </div>
  );
};
