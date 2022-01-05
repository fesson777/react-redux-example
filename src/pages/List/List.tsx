import styles from './List.module.scss';
import Button from '../../components/Button';
import Selector from './Selector';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getDataAction } from '../../store/list/actions';
import { DataType } from '../../store/list/types';

export default function List() {
  const dispatch = useDispatch();
  const { pending, posts, users } = useSelector(state => state.list);
  const [dataType, setDataType] = useState<DataType>('posts');

  const getData = (dataType: DataType) => dispatch(getDataAction(dataType));

  function handleSelectorChange(value: DataType) {
    setDataType(value);
  }

  function handleClick() {
    getData(dataType);
  }

  return (
    <>
      <div className={styles.btns}>
        <Button onClick={handleClick}>{pending ? 'pending' : 'fetch'}</Button>
      </div>
      <Selector onChange={handleSelectorChange} />
      <div className={styles.content}>
        <section className="list-group" id="list">
          {/* ------------------------------------------------------------- */}
          {dataType === 'posts' && posts.length
            ? posts.map(post => {
                return (
                  <div key={post.id}>
                    {post.id}: {post.title}
                  </div>
                );
              })
            : null}
          {/* ------------------------------------------------------------- */}
          {dataType === 'users' && users.length
            ? users.map(user => {
                return (
                  <div key={user.id}>
                    {user.id}: {user.name}
                  </div>
                );
              })
            : null}
          {/* ------------------------------------------------------------- */}
        </section>
      </div>
    </>
  );
}
