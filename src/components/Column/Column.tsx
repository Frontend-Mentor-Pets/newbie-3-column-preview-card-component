import { FC } from 'react';
import styles from './Column.module.scss';

type ColumnProps = {
  icon: string;
  header: string;
  text: string;
  color: string;
};

const Column: FC<ColumnProps> = ({ icon, header, text, color }) => {
  return (
    <div className={`${styles.column} ${styles[color]}`}>
      <div className={styles.icon}>
        <img src={icon} alt='icon' />
      </div>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{text}</p>
      <button className={styles.btn}>Learn More</button>
    </div>
  );
};

export default Column;
