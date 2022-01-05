import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <section>
        <Link to="/">На главную</Link>
      </section>
    </div>
  );
}
