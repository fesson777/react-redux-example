import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../../store/counter/actions';

export default function Controlls() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(incrementAction());
  }
  function handleDecrement() {
    dispatch(decrementAction());
  }
  function handleReset() {
    dispatch(resetAction());
  }
  return (
    <div>
      <Button
        id="add"
        variant="contained"
        color="primary"
        className="mr-1"
        onClick={handleIncrement}
      >
        Добавить
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        id="sub"
        size="small"
        className="mr-1"
        onClick={handleDecrement}
      >
        Убрать
      </Button>
      <Button
        color="error"
        variant="contained"
        disabled={count === 0}
        size="large"
        id="reset"
        onClick={handleReset}
      >
        Reset
      </Button>
    </div>
  );
}
