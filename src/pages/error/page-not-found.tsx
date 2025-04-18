import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '@/constants/constants.ts';
import style from './page-not-found.module.css';
import {Helmet} from 'react-helmet-async';

function PageNotFound(): JSX.Element {

  return (
    <section className={style.notFound}>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className={style.notFound__wrapper}>
        <h1 className={style.notFound__title}>404</h1>
        <h2 className={style.notFound__subtitle}>Упс! Страница не найдена.</h2>
        <p className={style.notFound__description}>
          Кажется, мы не можем найти страницу, которую вы ищете. Возможно, она была удалена или перемещена.
        </p>
        <Link to={AppRoute.Root} className={style.notFound__link}>Вернуться на главную</Link>
      </div>
    </section>
  );
}

export default PageNotFound;
