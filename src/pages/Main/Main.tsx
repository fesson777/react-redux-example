import styles from './Main.module.scss';
import Controlls from './Controlls';
import { useSelector } from 'react-redux';

export default function Main() {
  const count = useSelector(state => state.counter.count);

  return (
    <div className={styles.btns}>
      <h5 className="card-title">
        Счетчик: <span id="counter">{count}</span>
      </h5>
      <Controlls />
    </div>
  );
}
