import styles from './Card.module.scss';
import data from '../../data';
import Column from '../Column';

const Card = () => {
  return (
    <div className={styles.card}>
      {data.map((column) => (
        <Column key={column.header} icon={column.icon} header={column.header} text={column.text} color={column.color} />
      ))}
    </div>
  );
};

export default Card;
