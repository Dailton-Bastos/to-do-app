import { IconChecked } from './IconChecked';
import { IconUnChecked } from './IconUnChecked';
import { IconTrash } from './IconTrash';

import { ListProps } from '../../../types';
import styles from './List.module.css';

export const List = ({ tasks = [] }: ListProps) => {
  return (
    <ul className={styles.list}>
      {tasks?.map((task) => (
        <li
          className={`${styles.listItem} ${
            task?.isFinished ? styles.listItemDone : ''
          }`}
          key={task?.id}
        >
          <div
            className={`${styles.listItemContent} ${
              task?.isFinished ? styles.listItemContentDone : ''
            }`}
          >
            <button className={styles.listItemContentButtonChecked}>
              {task?.isFinished ? <IconChecked /> : <IconUnChecked />}
            </button>

            <p>{task?.title}</p>
          </div>

          <button className={styles.listItemContentButtonDelete}>
            <IconTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};
