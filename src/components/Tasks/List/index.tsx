import React from 'react';

import { IconChecked } from './IconChecked';
import { IconUnChecked } from './IconUnChecked';
import { IconTrash } from './IconTrash';

import { ListProps } from '../../../types';
import styles from './List.module.css';

export const List = ({ tasks = [], setTasks }: ListProps) => {
  const onUpdateTask = React.useCallback(
    (id: string) => {
      const updatedTasks = tasks?.map((task) => {
        if (task?.id === id) {
          return {
            ...task,
            isFinished: !task?.isFinished,
          };
        }

        return { ...task };
      });

      setTasks(updatedTasks);
    },
    [tasks, setTasks]
  );

  const onDeleteTask = React.useCallback(
    (id: string) => {
      const filteredTasks = tasks?.filter((task) => task?.id !== id);

      setTasks(filteredTasks);
    },
    [tasks, setTasks]
  );

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
            <button
              className={styles.listItemContentButtonChecked}
              onClick={() => onUpdateTask(task?.id)}
            >
              {task?.isFinished ? <IconChecked /> : <IconUnChecked />}
            </button>

            <p>{task?.title}</p>
          </div>

          <button
            className={styles.listItemContentButtonDelete}
            onClick={() => onDeleteTask(task?.id)}
          >
            <IconTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};
