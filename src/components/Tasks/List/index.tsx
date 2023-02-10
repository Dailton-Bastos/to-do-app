import { IconChecked } from './IconChecked';
import { IconUnChecked } from './IconUnChecked';
import { IconTrash } from './IconTrash';

import styles from './List.module.css';

export const List = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <div className={styles.listItemContent}>
          <button className={styles.listItemContentButtonChecked}>
            <IconUnChecked />
          </button>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            velit?
          </p>
        </div>

        <button className={styles.listItemContentButtonDelete}>
          <IconTrash />
        </button>
      </li>

      <li className={`${styles.listItem} ${styles.listItemDone}`}>
        <div
          className={`${styles.listItemContent} ${styles.listItemContentDone}`}
        >
          <button className={styles.listItemContentButtonChecked}>
            <IconChecked />
          </button>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id
            repudiandae minus a eligendi nisi.
          </p>
        </div>

        <button className={styles.listItemContentButtonDelete}>
          <IconTrash />
        </button>
      </li>
    </ul>
  );
};
