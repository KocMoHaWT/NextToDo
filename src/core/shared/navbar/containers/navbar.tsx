import React from 'react';
import { useDispatch } from 'react-redux';
import css from './navbar.component.scss';
import { navbarFilters, SetFilterAct } from '../navbar.actions';

export const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <ul className={css.navbar}>
      <li onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_ALL }))}>all</li>
      <li onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_IN_PROGRESS }))}>
        In progress
      </li>
      <li onClick={(): void => dispatch(new SetFilterAct({ filter: navbarFilters.FILTER_COMPLETED }))}>Completed</li>
    </ul>
  );
};
