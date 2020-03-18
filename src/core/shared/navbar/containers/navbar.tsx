import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classNames';
import styles from './navbar.component.scss';
import { navbarFilters, SetFilterAct } from '../navbar.actions';
import { getFilter } from '../navbar.selector';

export const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => getFilter(state));
  return (
    <ul className={styles.navbar}>
      <li
        className={classnames({ [styles.current]: currentFilter === navbarFilters.FILTER_ALL })}
        onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_ALL }))}
      >
        all
      </li>
      <li
        className={classnames({ [styles.current]: currentFilter === navbarFilters.FILTER_IN_PROGRESS })}
        onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_IN_PROGRESS }))}
      >
        In progress
      </li>
      <li
        className={classnames({ [styles.current]: currentFilter === navbarFilters.FILTER_COMPLETED })}
        onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_COMPLETED }))}
      >
        Completed
      </li>
    </ul>
  );
};
